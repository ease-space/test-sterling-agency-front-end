export const constants = Object.freeze({
  APP_NAME: 'TemplateMonster',

  API_URL_BASKED: 'https://api.templatemonster.com/carts/v2/',

  PATCH_URL_HOME: '/',
  PATCH_URL_PRODUCT: '/product',
  PATCH_URL_CURRENT_PRODUCT: '/product/:id',
  PATCH_URL_BASKET: '/basket',
  PATCH_URL_HELP: '/help',
  PATCH_URL_ACCOUNT: '/account',
  PATCH_URL_COLLECTION: '/collection',

  AUTH_TOKEN: 'token',
  COOKIE_MAX_AGE: 1000 * 60 * 60 * 24 * 365,
  SETTINGS: 'settings',
  LANGUAGE_COOKIE_NAME: 'language',
  LANGUAGE_UK: 'uk',
  LANGUAGE_RU: 'ru',
  LANGUAGE_EN: 'en',
  SUPPORTED_LANGUAGES: ['uk', 'ru', 'en'],
  DEFAULT_LANGUAGE: 'uk',
});
