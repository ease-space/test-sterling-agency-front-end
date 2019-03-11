import React, { Component } from 'react';

import AppWrapper from '../../containers/AppWrapper';
import Routes from '../../containers/Routes/index';

import { isClient } from '../../core/functions/common';

class App extends Component {
  componentDidMount() {
    if (isClient()) {
      const initialState = document.getElementById('initialState');
      if (initialState) {
        initialState.remove();
      }
    }
  }

  render() {
    return (
      <AppWrapper>
        <Routes />
      </AppWrapper>
    );
  }
}

export default App;
