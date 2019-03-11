import { types } from './types';

export const initialState = {
  isOpenHeaderMobileMenu: false,
};

export const wrapperReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_OPEN_HEADER_MOBILE_MENU_STATE:
      return {
        ...state,
        isOpenHeaderMobileMenu: action.payload,
      };
    default:
      return state;
  }
};
