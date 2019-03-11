export const createFetch = (fetch, { uri }) => {
  return (url, options) => {
    return fetch(`${uri}${url}`, {
      ...options,
      headers: { ...(options && options.headers) },
    });
  };
};
