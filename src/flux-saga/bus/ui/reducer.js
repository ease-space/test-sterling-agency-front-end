import { combineReducers } from 'redux';

import { wrapperReducer as wrapper } from './wrapper/reducers';
import { settingsReducer as settings } from './settings/reducers';
import { fetchReducer as fetch } from './fetch/reducers';
import { statisticsReducer as statistics } from './statistics/reducers';

export const uiReducer = () =>
  combineReducers({
    wrapper,
    settings,
    fetch,
    statistics,
  });
