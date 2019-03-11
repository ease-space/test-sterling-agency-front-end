import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { intlShape, defineMessages, injectIntl } from 'react-intl';
import { curryRight } from 'lodash';
import classNames from 'classnames';

import ReactSvg from 'react-svg';

import './styles.css';

import iconProducts from '../../../../assets/images/icon-products.svg';
import iconSubjects from '../../../../assets/images/icon-subjects.svg';
import iconCompany from '../../../../assets/images/icon-company.svg';
import iconSupport from '../../../../assets/images/icon-support.svg';

const messages = defineMessages({
  products: {
    id: 'app.page.footer.navigation.products',
    defaultMessage: 'Продукти',
  },
  subjects: {
    id: 'app.page.footer.navigation.subjects',
    defaultMessage: 'Тематики',
  },
  company: {
    id: 'app.page.footer.navigation.company',
    defaultMessage: 'Компанія',
  },
  support: {
    id: 'app.page.footer.navigation.support',
    defaultMessage: 'Підтримка',
  },
  wordpressTempletes: {
    id: 'app.page.footer.navigation.products.wordpressTempletes',
    defaultMessage: 'Wordpress шаблони',
  },
  htmlTempletes: {
    id: 'app.page.footer.navigation.products.htmlTempletes',
    defaultMessage: 'HTML шаблони',
  },
  openCartTempletes: {
    id: 'app.page.footer.navigation.products.openCartTempletes',
    defaultMessage: 'OpenCart шаблони',
  },
  joomlaTempletes: {
    id: 'app.page.footer.navigation.products.joomlaTempletes',
    defaultMessage: 'Joomla шаблони',
  },
  prestaShopTempletes: {
    id: 'app.page.footer.navigation.products.prestaShopTempletes',
    defaultMessage: 'PrestaShop шаблони',
  },
  wooCommerceTempletes: {
    id: 'app.page.footer.navigation.products.wooCommerceTempletes',
    defaultMessage: 'WooCommerce шаблони',
  },
  websiteDesigner: {
    id: 'app.page.footer.navigation.products.websiteDesigner',
    defaultMessage: 'PrestaShop шаблони',
  },
  magentoTempletes: {
    id: 'app.page.footer.navigation.products.magentoTempletes',
    defaultMessage: 'WooCommerce шаблони',
  },
  sitesBusinessCards: {
    id: 'app.page.footer.navigation.subjects.sitesBusinessCards',
    defaultMessage: 'Сайти-візитки',
  },
  fashionAndBeauty: {
    id: 'app.page.footer.navigation.subjects.fashionAndBeauty',
    defaultMessage: 'Мода та краса',
  },
  family: {
    id: 'app.page.footer.navigation.subjects.family',
    defaultMessage: 'Сім`я',
  },
  designAndPhoto: {
    id: 'app.page.app.page.footer.navigation.subjects.designAndPhoto',
    defaultMessage: 'Дизайн і фото',
  },
  realEstate: {
    id: 'app.page.footer.navigation.subjects.realEstate',
    defaultMessage: 'Нерухомість',
  },
  autoAndMoto: {
    id: 'app.page.footer.navigation.subjects.autoAndMoto',
    defaultMessage: 'Авто і мото',
  },
  medicine: {
    id: 'app.page.footer.navigation.subjects.medicine',
    defaultMessage: 'Медицина',
  },
  travelAndSports: {
    id: 'app.page.footer.navigation.subjects.travelAndSports',
    defaultMessage: 'Подорожі та спорт',
  },
  aboutCompany: {
    id: 'app.page.footer.navigation.company.aboutCompany',
    defaultMessage: 'Про компанію',
  },
  webStudioDirectory: {
    id: 'app.page.footer.navigation.company.webStudioDirectory',
    defaultMessage: 'Каталог веб-студій',
  },
  blog: {
    id: 'app.page.footer.navigation.company.blog',
    defaultMessage: 'Блог',
  },
  affiliateProgram: {
    id: 'app.page.footer.navigation.company.affiliateProgram',
    defaultMessage: 'Партнерська програма',
  },
  contactUs: {
    id: 'app.page.footer.navigation.company.contactUs',
    defaultMessage: 'Зв`язатися з нами',
  },
  privacyPolicy: {
    id: 'app.page.footer.navigation.company.privacyPolicy',
    defaultMessage: 'Політика кофіденційності',
  },
  returnPolicy: {
    id: 'app.page.footer.navigation.company.returnPolicy',
    defaultMessage: 'Правила повернення',
  },
  terms: {
    id: 'app.page.footer.navigation.company.terms',
    defaultMessage: 'Умови',
  },
  helpCenter: {
    id: 'app.page.footer.navigation.support.helpCenter',
    defaultMessage: 'Довідковий центр',
  },
  reportSpam: {
    id: 'app.page.footer.navigation.support.reportSpam',
    defaultMessage: 'Поскаржитись на спам',
  },
  becomeSupplier: {
    id: 'app.page.footer.navigation.support.becomeSupplier',
    defaultMessage: 'Стати постачальником',
  },
});

@compose(curryRight(injectIntl))
class Navigation extends Component {
  static propTypes = {
    intl: intlShape,
    className: PropTypes.string,
  };

  render() {
    const { formatMessage } = this.props.intl;
    const { className } = this.props;

    const link = (onClick, message) => (
      <div>
        <a
          className="footer-navigation_block_content_link"
          href="javascript:void(0)"
          onClick={onClick}
        >
          {message}
        </a>
      </div>
    );

    return (
      <div className={classNames(['footer-navigation', className])}>
        <div className="footer-navigation_block">
          <div className="footer-navigation_block_header">
            <ReactSvg
              src={iconProducts}
              className="footer-navigation_block_header_icon"
            />
            <div className="footer-navigation_block_header_title">
              {formatMessage(messages.products)}
            </div>
          </div>
          <div className="footer-navigation_block_content">
            {link(null, formatMessage(messages.wordpressTempletes))}
            {link(null, formatMessage(messages.htmlTempletes))}
            {link(null, formatMessage(messages.openCartTempletes))}
            {link(null, formatMessage(messages.joomlaTempletes))}
            {link(null, formatMessage(messages.prestaShopTempletes))}
            {link(null, formatMessage(messages.wooCommerceTempletes))}
            {link(null, formatMessage(messages.websiteDesigner))}
            {link(null, formatMessage(messages.magentoTempletes))}
          </div>
        </div>
        <div className="footer-navigation_block">
          <div className="footer-navigation_block_header">
            <ReactSvg
              src={iconSubjects}
              className="footer-navigation_block_header_icon"
            />
            <div className="footer-navigation_block_header_title">
              {formatMessage(messages.subjects)}
            </div>
          </div>
          <div className="footer-navigation_block_content">
            {link(null, formatMessage(messages.sitesBusinessCards))}
            {link(null, formatMessage(messages.fashionAndBeauty))}
            {link(null, formatMessage(messages.family))}
            {link(null, formatMessage(messages.designAndPhoto))}
            {link(null, formatMessage(messages.realEstate))}
            {link(null, formatMessage(messages.autoAndMoto))}
            {link(null, formatMessage(messages.medicine))}
            {link(null, formatMessage(messages.travelAndSports))}
          </div>
        </div>
        <div className="footer-navigation_block">
          <div className="footer-navigation_block_header">
            <ReactSvg
              src={iconCompany}
              className="footer-navigation_block_header_icon"
            />
            <div className="footer-navigation_block_header_title">
              {formatMessage(messages.company)}
            </div>
          </div>
          <div className="footer-navigation_block_content">
            {link(null, formatMessage(messages.aboutCompany))}
            {link(null, formatMessage(messages.webStudioDirectory))}
            {link(null, formatMessage(messages.blog))}
            {link(null, formatMessage(messages.affiliateProgram))}
            {link(null, formatMessage(messages.contactUs))}
            {link(null, formatMessage(messages.privacyPolicy))}
            {link(null, formatMessage(messages.returnPolicy))}
            {link(null, formatMessage(messages.terms))}
          </div>
        </div>
        <div className="footer-navigation_block">
          <div className="footer-navigation_block_header">
            <ReactSvg
              src={iconSupport}
              className="footer-navigation_block_header_icon"
            />
            <div className="footer-navigation_block_header_title">
              {formatMessage(messages.support)}
            </div>
          </div>
          <div className="footer-navigation_block_content">
            {link(null, formatMessage(messages.helpCenter))}
            {link(null, formatMessage(messages.reportSpam))}
            {link(null, formatMessage(messages.becomeSupplier))}
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
