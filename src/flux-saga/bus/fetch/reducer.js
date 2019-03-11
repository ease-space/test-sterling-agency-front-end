import { combineReducers } from 'redux';

import { userReducer as user } from './user/reducers';
import { basketReducer as basket } from './basket/reducers';
import { statisticsReducer as statistics } from './statistics/reducers';

export const fetchReducer = () =>
  combineReducers({
    user,
    basket,
    statistics,
  });
