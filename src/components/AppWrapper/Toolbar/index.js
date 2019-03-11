import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import compose from 'recompose/compose';

import Menu from '../../../containers/AppWrapper/Toolbar/Menu';

import SvgLogoLarge from '../../SvgImage/Logo/Large';
import SvgLogoSmall from '../../SvgImage/Logo/Small';

import { withPageHelper } from '../../../hok/withPageHelper';

import './styles.css';

@compose(withPageHelper)
class Toolbar extends Component {
  static propTypes = {
    className: PropTypes.string,
    onClickHome: PropTypes.func,
  };

  render() {
    const { className, onClickHome } = this.props;

    return (
      <div className={classNames(['toolbar', className])}>
        <div className="toolbar_content">
          <SvgLogoLarge
            onClick={onClickHome}
            className="toolbar_content_logo-large"
          />
          <SvgLogoSmall
            onClick={onClickHome}
            className="toolbar_content_logo-small"
          />
          <Menu />
        </div>
      </div>
    );
  }
}

export default Toolbar;
