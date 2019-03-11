import Accepts from 'accepts';
import _ from 'lodash';

export const getLanguagesFromHeaders = req => {
  return Accepts(req).languages();
};

export const extractLanguagesFromReq = (req, cookiesSettings) => {
  const language = _.get(cookiesSettings, 'language');
  if (language) {
    return [language];
  }
  return getLanguagesFromHeaders(req) || [];
};

export const guessLanguages = (
  availableLocales,
  clientLocales,
  defaultLocale,
) => {
  return (
    clientLocales.filter(clientLocale =>
      availableLocales.includes(clientLocale),
    )[0] || defaultLocale
  );
};
