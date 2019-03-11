import { types } from './types';

export const initialState = {
  products: [],
};

export const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_FETCH_BASKET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};
