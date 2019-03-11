import nodeFetch from 'node-fetch';

import { constants } from '../constants/index';
import { createFetch } from './fetch/index';

const fetch = createFetch(nodeFetch, {
  uri: constants.API_URL,
});

const getHeaders = token => {
  return {
    Authorization: token || '',
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
};

export const Api = {
  basket: {
    getMyBasked(token) {
      return fetch(`/carts/v2`, {
        method: 'POST',
        headers: getHeaders(token),
      });
    },
  },
  user: {
    signUpUser({ username, email, password }) {
      const body = JSON.stringify({
        username: username,
        email: email,
        password: password,
      });
      return fetch(`/api/v1/users`, {
        method: 'POST',
        headers: getHeaders(),
        body: body,
      });
    },
    loginUser({ loginNameOrEmail, password, isEmail }) {
      const body = isEmail
        ? JSON.stringify({
            email: loginNameOrEmail,
            password: password,
          })
        : JSON.stringify({
            username: loginNameOrEmail,
            password: password,
          });
      return fetch('/api/v1/users/login?include=user', {
        method: 'POST',
        headers: getHeaders(),
        body: body,
      });
    },
    userByToken(token) {
      return fetch(`/api/v1/accessTokens/${token}/user`, {
        method: 'GET',
        headers: getHeaders(token),
      });
    },
    logoutUserByToken(token) {
      return fetch(`/api/v1/users/logout`, {
        method: 'POST',
        headers: getHeaders(token),
      });
    },
    profileUserById(id, token) {
      return fetch(`/api/v1/users/${id}/profile`, {
        method: 'GET',
        headers: getHeaders(token),
      });
    },
    changePassword({ oldPassword, newPassword }, token) {
      const body = JSON.stringify({
        oldPassword: oldPassword,
        newPassword: newPassword,
      });
      return fetch('/api/v1/users/change-password', {
        method: 'POST',
        headers: getHeaders(token),
        body: body,
      });
    },
  },
};
