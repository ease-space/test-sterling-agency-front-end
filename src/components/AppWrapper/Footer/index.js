import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Layout from '../../../containers/Pages/Wrapper/Layout';
import About from '../../../containers/AppWrapper/Footer/About';
import Navigation from '../../../containers/AppWrapper/Footer/Navigation';
import Subscribe from '../../../containers/AppWrapper/Footer/Subscribe';
import Other from '../../../containers/AppWrapper/Footer/Other';

import './styles.css';

class Footer extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    const { className } = this.props;

    return (
      <div className={classNames(['footer', className])}>
        <Layout>
          <About className="footer_about" />
          <Navigation className="footer_navigation" />
          <Subscribe className="footer_subscribe" />
          <Other className="footer_other" />
        </Layout>
      </div>
    );
  }
}

export default Footer;
