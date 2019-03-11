import { constants } from '../../../../core/constants/index';
import { types } from './types';

export const initialState = (state = {}) => {
  const { language = constants.DEFAULT_LANGUAGE, changed = false } = state;
  return {
    language: {
      language: language,
      changed: changed,
    },
  };
};

export const settingsReducer = (state = initialState(), action) => {
  switch (action.type) {
    case types.SET_SETTINGS_STATE:
      return {
        ...state,
        language: {
          language: action.payload.language,
          changed: initialState.language.changed,
        },
      };
    case types.SET_SETTINGS_LANGUAGE_STATE:
      return {
        ...state,
        language: {
          language: action.payload,
          changed: true,
        },
      };
    default:
      return state;
  }
};
