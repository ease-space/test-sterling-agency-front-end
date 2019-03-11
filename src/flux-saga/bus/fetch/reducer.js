import { combineReducers } from 'redux';

import { userReducer as user } from './user/reducers';
import { basketReducer as basket } from './basket/reducers';

export const fetchReducer = () =>
  combineReducers({
    user,
    basket,
  });
