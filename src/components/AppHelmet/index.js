import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { Helmet } from 'react-helmet';

import { withPageHelper } from '../../hok/withPageHelper';
import { constants } from '../../core/constants/index';

import '../../assets/styles/init.css';

@compose(withPageHelper)
class AppHelmet extends Component {
  static propTypes = {
    getPageTitle: PropTypes.func,
    location: PropTypes.object.isRequired,
    language: PropTypes.string.isRequired,
  };

  render() {
    const { location, language, getPageTitle } = this.props;

    const patch = location.pathname;
    const title = getPageTitle(patch);

    return (
      <Helmet
        encodeSpecialCharacters={true}
        defaultTitle={constants.APP_NAME}
        titleTemplate={`${constants.APP_NAME} - %s`}
      >
        <html lang={language} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=0, maximum-scale=1, minimum-scale=1"
        />
        <title>{title}</title>
      </Helmet>
    );
  }
}

export default AppHelmet;
