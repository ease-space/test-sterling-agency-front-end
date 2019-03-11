import { asyncTypes } from './asyncTypes';

export const settingsActionsAsync = Object.freeze({
  setLanguageStateAsync: state => ({
    type: asyncTypes.SET_SETTINGS_LANGUAGE_STATE_ASYNC,
    payload: state,
  }),
});
