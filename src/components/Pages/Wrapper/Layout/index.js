import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';

class Layout extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
      PropTypes.string,
    ]),
    className: PropTypes.string,
  };

  render() {
    const { children, className } = this.props;

    return (
      <div className={classNames(['layout-page-wrapper', className])}>
        <div className="layout-page-wrapper_content">{children}</div>
      </div>
    );
  }
}

export default Layout;
