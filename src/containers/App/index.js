import React, { Component } from 'react';
import compose from 'recompose/compose';
import { withRouter } from 'react-router-dom';

import App from '../../components/App';

@compose(withRouter)
class AppContainer extends Component {
  render() {
    return <App />;
  }
}

export default AppContainer;
