import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { intlShape, defineMessages, injectIntl } from 'react-intl';
import { curryRight } from 'lodash';
import classNames from 'classnames';

import Layout from '../../../containers/Pages/Wrapper/Layout';
import SvgChatIcon from '../../../components/SvgImage/Chat';

import imageOffer from '../../../assets/images/image_offer.png';

import './styles.css';

const messages = defineMessages({
  startChat: {
    id: 'app.page.offer.startChat',
    defaultMessage: 'Розпочати чат',
  },
  textV1: {
    id: 'app.page.offer.text.v1',
    defaultMessage:
      'Шукаєте щось особливе? Підберіть бажане разом з консультантом!',
  },
  textV2: {
    id: 'app.page.offer.text.v2',
    defaultMessage: 'Шукаєте щось особливе?',
  },
});

@compose(curryRight(injectIntl))
class Offer extends Component {
  static propTypes = {
    intl: intlShape,
    className: PropTypes.string,
    onClickStartChat: PropTypes.func,
  };

  render() {
    const { formatMessage } = this.props.intl;
    const { className, onClickStartChat } = this.props;

    return (
      <div className={classNames(['offer', className])}>
        <Layout className="offer_layout">
          <div className="offer_layout_wrapper">
            <img src={imageOffer} className="offer_layout_wrapper_image" />
            <div className="offer_layout_wrapper_content">
              <div className="offer_layout_wrapper_content_text">
                <div className="offer_layout_wrapper_content_text_v1">
                  {formatMessage(messages.textV1)}
                </div>
                <div className="offer_layout_wrapper_content_text_v2">
                  {formatMessage(messages.textV2)}
                </div>
              </div>
              <button
                onClick={onClickStartChat}
                className="offer_layout_wrapper_content_button"
              >
                <div className="offer_layout_wrapper_content_button_content">
                  <SvgChatIcon className="offer_layout_wrapper_content_button_icon" />
                  <div className="offer_layout_wrapper_content_button_text">
                    {formatMessage(messages.startChat)}
                  </div>
                </div>
              </button>
            </div>
          </div>
        </Layout>
      </div>
    );
  }
}

export default Offer;
