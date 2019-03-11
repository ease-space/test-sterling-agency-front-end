import _ from 'lodash';

export const getSignUpRequestErrorMessage = (
  status,
  data,
  busyLogin,
  busyEmail,
  busyLoginEmail,
) => {
  if (status === 422) {
    if (
      _.includes(data.error.message, 'email') &&
      _.includes(data.error.message, 'username')
    ) {
      throw new Error(busyLoginEmail);
    } else if (_.includes(data.error.message, 'username')) {
      throw new Error(busyLogin);
    } else if (_.includes(data.error.message, 'email')) {
      throw new Error(busyEmail);
    }
  }
};

export const getAnotherRequestErrorMessage = (
  status,
  authorizationError,
  anotherError,
) => {
  if (status === 401) {
    throw new Error(authorizationError);
  }
  throw new Error(anotherError + status);
};

export const getFetchErrorMessage = (error, failedFetch) => {
  return _.includes(error.message.toLowerCase(), 'fetch')
    ? failedFetch
    : error.message;
};
