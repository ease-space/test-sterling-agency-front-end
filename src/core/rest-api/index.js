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
  statistics: {
    getStatisticsUsers(token) {
      return fetch(`/users/statistics`, {
        method: 'GET',
        headers: getHeaders(token),
      });
    },
  },
};
