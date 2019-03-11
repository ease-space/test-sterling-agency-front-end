import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { defineMessages, injectIntl, FormattedMessage } from 'react-intl';
import { curryRight } from 'lodash';
import classNames from 'classnames';

import './styles.css';

const messages = defineMessages({
  copyright: {
    id: 'app.page.footer.other.copyright',
    defaultMessage: '@ {year} Web Templates LLC. Всі права захищені',
  },
  lastUpdate: {
    id: 'app.page.footer.other.lastUpdate',
    defaultMessage: 'Востаннє оновлено {date}',
  },
});

import SvgFacebookIcon from '../../../SvgImage/Facebook';
import SvgGoogleIcon from '../../../SvgImage/Google';
import SvgPinterestIcon from '../../../SvgImage/Pinterest';
import SvgTwitterIcon from '../../../SvgImage/Twitter';

@compose(curryRight(injectIntl))
class Subscribe extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    const { className } = this.props;

    return (
      <div className={classNames(['other', className])}>
        <div className="other_copyright">
          <FormattedMessage
            id={messages.copyright.id}
            defaultMessage={messages.copyright.defaultMessage}
            values={{
              year: new Date().getFullYear(),
            }}
          />
        </div>
        <div className="other_social">
          <div className="other_social_content">
            <SvgFacebookIcon className="other_social_content_icon" />
            <SvgGoogleIcon className="other_social_content_icon" />
            <SvgPinterestIcon className="other_social_content_icon" />
            <SvgTwitterIcon className="other_social_content_icon" />
          </div>
        </div>
        <div className="other_last-update">
          <FormattedMessage
            id={messages.lastUpdate.id}
            defaultMessage={messages.lastUpdate.defaultMessage}
            values={{
              date: '3 марта 2019',
            }}
          />
        </div>
      </div>
    );
  }
}

export default Subscribe;
