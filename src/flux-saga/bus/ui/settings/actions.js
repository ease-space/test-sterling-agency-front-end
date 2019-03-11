import { types } from './types';

export const settingsActions = Object.freeze({
  setSettingsState: state => ({
    type: types.SET_SETTINGS_STATE,
    payload: state,
  }),
  setLanguageState: state => ({
    type: types.SET_SETTINGS_LANGUAGE_STATE,
    payload: state,
  }),
});
