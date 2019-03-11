export const isValidEmailChars = email => {
  const filter = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return filter.test(email);
};

export const isValidLength = (text, minLength, maxLength) => {
  return text
    ? maxLength
      ? text.length >= minLength && text.length <= maxLength
      : text.length >= minLength
    : false;
};

export const isValidEmail = email => {
  return isValidLength(email, 0) && isValidEmailChars(email);
};
