import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import {
  intlShape,
  defineMessages,
  injectIntl,
  FormattedMessage,
} from 'react-intl';
import { Form, Control } from 'react-redux-form';
import { curryRight } from 'lodash';
import classNames from 'classnames';
import ReactSvg from 'react-svg';

import { isValidEmail } from '../../../../core/functions/form';
import iconSubscribe from '../../../../assets/images/icon-subscribe.svg';
import SvgIconEmail from '../../../SvgImage/Email';

import './styles.css';

const messages = defineMessages({
  offer: {
    id: 'app.page.footer.subscribe.offer',
    defaultMessage: 'Отримуйте знижки та подарунки щотижня!',
  },
  email: {
    id: 'app.page.footer.subscribe.email',
    defaultMessage: 'Введіть ваш email адрес',
  },
  action: {
    id: 'app.page.footer.subscribe.action',
    defaultMessage: 'Підписатись',
  },
  agreement: {
    id: 'app.page.footer.subscribe.agreement',
    defaultMessage:
      'Натискаючи на кнопку, я погоджуюсь на обробку мого email згідно з {linkAgreement}',
  },
  linkAgreement: {
    id: 'app.page.footer.subscribe.agreement.linkAgreement',
    defaultMessage: 'Угодою',
  },
});

@compose(curryRight(injectIntl))
class Subscribe extends Component {
  static propTypes = {
    intl: intlShape,
    className: PropTypes.string,
    onClickAgreement: PropTypes.func.isRequired,
    onSubmitForm: PropTypes.func.isRequired,
    touched: PropTypes.bool.isRequired,
    valid: PropTypes.bool.isRequired,
  };

  render() {
    const { formatMessage } = this.props.intl;
    const {
      className,
      onClickAgreement,
      onSubmitForm,
      touched,
      valid,
    } = this.props;

    const linkAgreement = (
      <a
        className="subscribe_agreement_link"
        href="javascript:void(0)"
        onClick={onClickAgreement}
      >
        {formatMessage(messages.linkAgreement)}
      </a>
    );

    return (
      <div className={classNames(['subscribe', className])}>
        <div className="subscribe_offer">
          <ReactSvg src={iconSubscribe} className="subscribe_offer_icon" />
          <div className="subscribe_offer_title">
            {formatMessage(messages.offer)}
          </div>
        </div>
        <div className="subscribe_main">
          <Form
            onSubmit={dataForm => onSubmitForm(dataForm)}
            className={classNames(['subscribe_main_form'], {
              ['subscribe_main_form_error']: !valid && touched,
            })}
            model="forms.subscribe"
          >
            <SvgIconEmail className="subscribe_main_form_icon" />
            <Control.input
              className="subscribe_main_form_input"
              type="email"
              model="forms.subscribe.email"
              placeholder={formatMessage(messages.email)}
              validators={{
                valid: email => isValidEmail(email),
              }}
            />
            <Control.button
              className="subscribe_main_form_button"
              type="submit"
              model="forms.subscribe"
            >
              {formatMessage(messages.action)}
            </Control.button>
          </Form>
        </div>
        <div className="subscribe_agreement">
          <FormattedMessage
            id={messages.agreement.id}
            defaultMessage={messages.agreement.defaultMessage}
            values={{
              linkAgreement: linkAgreement,
            }}
          />
        </div>
      </div>
    );
  }
}

export default Subscribe;
