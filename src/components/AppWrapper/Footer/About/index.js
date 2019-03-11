import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import {
  intlShape,
  defineMessages,
  injectIntl,
  FormattedMessage,
} from 'react-intl';
import { curryRight } from 'lodash';
import classNames from 'classnames';

import './styles.css';

import SvgLogoLarge from '../../../SvgImage/Logo/Large';

const messages = defineMessages({
  aboutCompany: {
    id: 'app.page.footer.about.aboutCompany',
    defaultMessage:
      'TemplateMonster - це маркетплейс, на якому можна придбати все необхідне для створення сайту. Сотні незалежних розробників продають свої продукти в нас щоб ви моги створити свій унікальний проект.',
  },
  buyers: {
    id: 'app.page.footer.about.buyers',
    defaultMessage: '{count} покупців',
  },
  suppliers: {
    id: 'app.page.footer.about.suppliers',
    defaultMessage: '{count} постачальників',
  },
  products: {
    id: 'app.page.footer.about.products',
    defaultMessage: '{count} продуктів',
  },
});

@compose(curryRight(injectIntl))
class About extends Component {
  static propTypes = {
    intl: intlShape,
    className: PropTypes.string,
    buyers: PropTypes.number.isRequired,
    suppliers: PropTypes.number.isRequired,
    products: PropTypes.number.isRequired,
  };

  render() {
    const { formatMessage } = this.props.intl;
    const { className, buyers, suppliers, products } = this.props;

    const formatNumber = number => new Intl.NumberFormat('en').format(number);

    const countBuyers = (
      <b className="footer-about_successes_success_count">
        {formatNumber(buyers)}
      </b>
    );

    const countSuppliers = (
      <b className="footer-about_successes_success_count">
        {formatNumber(suppliers)}
      </b>
    );

    const countProducts = (
      <b className="footer-about_successes_success_count">
        {formatNumber(products)}
      </b>
    );

    return (
      <div className={classNames(['footer-about', className])}>
        <SvgLogoLarge className="footer-about_logo-large" />
        <div className="footer-about_about-company">
          {formatMessage(messages.aboutCompany)}
        </div>
        <div className="footer-about_successes">
          <div className="footer-about_successes_success">
            <FormattedMessage
              id={messages.buyers.id}
              defaultMessage={messages.buyers.defaultMessage}
              values={{
                count: countBuyers,
              }}
            />
          </div>
          <div className="footer-about_successes_success">
            <FormattedMessage
              id={messages.buyers.id}
              defaultMessage={messages.buyers.defaultMessage}
              values={{
                count: countSuppliers,
              }}
            />
          </div>
          <div className="footer-about_successes_success">
            <FormattedMessage
              id={messages.buyers.id}
              defaultMessage={messages.buyers.defaultMessage}
              values={{
                count: countProducts,
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
