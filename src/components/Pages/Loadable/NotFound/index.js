import React, { Component } from 'react';
import compose from 'recompose/compose';
import { intlShape, defineMessages, injectIntl } from 'react-intl';
import { curryRight } from 'lodash';

import Wrapper from '../../../../containers/Pages/Wrapper';

const messages = defineMessages({
  notFound: {
    id: 'app.page.notFound',
    defaultMessage: 'Сторінку не знайдено',
  },
});

@compose(curryRight(injectIntl))
class NotFound extends Component {
  static propTypes = {
    intl: intlShape,
  };

  render() {
    const { formatMessage } = this.props.intl;

    return <Wrapper>{formatMessage(messages.notFound)}</Wrapper>;
  }
}

export default NotFound;
