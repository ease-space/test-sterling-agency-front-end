import PropTypes from 'prop-types';
import React, { Component } from 'react';
import compose from 'recompose/compose';
import { connect } from 'react-redux';

import IntlProvider from '../../components/IntlProvider';

const mapStateToProps = state => {
  return {
    language: state.ui.settings.language.language,
  };
};

@compose(connect(mapStateToProps))
class CustomIntlProviderContainer extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
      PropTypes.string,
    ]),
    language: PropTypes.string,
  };

  render() {
    const { children, language } = this.props;

    return <IntlProvider language={language}>{children}</IntlProvider>;
  }
}

export default CustomIntlProviderContainer;
