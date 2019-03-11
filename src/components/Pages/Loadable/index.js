import React, { Component } from 'react';
import PropTypes from 'prop-types';
import universal from 'react-universal-component';

import Loading from '../../../containers/Pages/Loadable/Loading/index';
import NotFound from '../../../containers/Pages/Loadable/NotFound/index';

class Loadable extends Component {
  static propTypes = {
    dynamicImport: PropTypes.object.isRequired,
    loadingComponent: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
      PropTypes.string,
    ]),
    errorComponent: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
      PropTypes.string,
    ]),
    minDelayLoading: PropTypes.number,
    isLoading: PropTypes.bool,
  };

  static defaultProps = {
    loadingComponent: <Loading />,
    errorComponent: <NotFound />,
    minDelayLoading: 500,
  };

  render() {
    const {
      dynamicImport,
      loadingComponent,
      errorComponent,
      minDelayLoading,
      isLoading,
      ...other
    } = this.props;

    const options = {
      loading: loadingComponent,
      error: errorComponent,
      minDelay: minDelayLoading,
      ignoreBabelRename: true,
    };

    const Component = universal(() => dynamicImport, options);

    return <Component isLoading={isLoading} {...this.props} {...other} />;
  }
}

export default Loadable;
