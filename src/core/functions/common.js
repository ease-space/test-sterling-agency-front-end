import _ from 'lodash';

import { constants } from '../constants/index';

export const isClient = () => {
  return typeof window !== 'undefined';
};

export const isAuthenticatedUser = authUser => {
  return !!_.get(authUser, constants.AUTH_TOKEN);
};

export const isAuthenticatedInterface = authUser => {
  return isAuthenticatedUser(authUser);
};

export const isLoadingPage = (isFetch, type, typePage) => {
  return isFetch && type === typePage;
};
