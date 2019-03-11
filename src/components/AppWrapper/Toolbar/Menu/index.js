import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import classNames from 'classnames';

import { withPageHelper } from '../../../../hok/withPageHelper';

import SvgHelpIcon from '../../../SvgImage/Help';
import SvgCollectionIcon from '../../../SvgImage/Collection';
import SvgAccountIcon from '../../../SvgImage/Account';
import SvgBasketIcon from '../../../SvgImage/Basket';

import './styles.css';

import { constants } from '../../../../core/constants/index';

@compose(withPageHelper)
class Toolbar extends Component {
  static propTypes = {
    className: PropTypes.string,
    getPageTitle: PropTypes.func,
    onClickHelp: PropTypes.func,
    onClickCollection: PropTypes.func,
    onClickAccount: PropTypes.func,
    onClickBasket: PropTypes.func,
  };

  render() {
    const {
      className,
      getPageTitle,
      onClickHelp,
      onClickCollection,
      onClickAccount,
      onClickBasket,
    } = this.props;

    return (
      <div className={classNames(['toolbar-menu', className])}>
        <div className="toolbar-menu_content">
          <button className="toolbar-menu_button" onClick={onClickHelp}>
            <SvgHelpIcon className="toolbar-menu_button_icon" />
            <div className="toolbar-menu_button_text">
              {getPageTitle(constants.PATCH_URL_HELP)}
            </div>
          </button>
          <button className="toolbar-menu_button" onClick={onClickCollection}>
            <SvgCollectionIcon className="toolbar-menu_button_icon" />
            <div className="toolbar-menu_button_text">
              {getPageTitle(constants.PATCH_URL_COLLECTION)}
            </div>
          </button>
          <button className="toolbar-menu_button" onClick={onClickAccount}>
            <SvgAccountIcon className="toolbar-menu_button_icon" />
            <div className="toolbar-menu_button_text">
              {getPageTitle(constants.PATCH_URL_ACCOUNT)}
            </div>
          </button>
          <button className="toolbar-menu_button" onClick={onClickBasket}>
            <SvgBasketIcon className="toolbar-menu_button_icon" />
            <div className="toolbar-menu_button_text">
              {getPageTitle(constants.PATCH_URL_BASKET)}
            </div>
          </button>
        </div>
      </div>
    );
  }
}

export default Toolbar;
