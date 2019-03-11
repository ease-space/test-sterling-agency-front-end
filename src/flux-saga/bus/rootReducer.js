import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { uiReducer as ui } from './ui/reducer';
import { fetchReducer as fetch } from './fetch/reducer';
import { formReducer as forms } from './forms/reducers';

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    ui: ui(),
    fetch: fetch(),
    forms,
  });

export default rootReducer;
