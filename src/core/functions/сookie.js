import Cookies from 'universal-cookie';

import { constants } from '../constants/index';
import { isClient } from './common';

const cookiesOptions = {
  path: '/',
  maxAge: constants.COOKIE_MAX_AGE,
};

export const setSettings = settings => {
  if (isClient()) {
    const cookies = new Cookies();
    cookies.set(constants.SETTINGS, settings, cookiesOptions);
  }
};

export const getSettingsFromReg = req => {
  const cookies = new Cookies(req.headers.cookie);
  return cookies.get(constants.SETTINGS) || {};
};

export const setToken = token => {
  if (isClient()) {
    const cookies = new Cookies();
    cookies.set(constants.AUTH_TOKEN, token, cookiesOptions);
  }
};

export const getAuthTokenFromReg = req => {
  const cookies = new Cookies(req.headers.cookie);
  return cookies.get(constants.AUTH_TOKEN) || '';
};
