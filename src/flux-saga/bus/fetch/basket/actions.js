import { types } from './types';

export const basketActions = Object.freeze({
  setFetchBasketProductsRequest: () => ({
    type: types.SET_FETCH_BASKET_PRODUCTS_REQUEST,
  }),
  setFetchBasketProductsSuccess: state => ({
    type: types.SET_FETCH_BASKET_PRODUCTS_SUCCESS,
    payload: state,
  }),
  setFetchBasketProductsError: () => ({
    type: types.SET_FETCH_BASKET_PRODUCTS_SUCCESS,
  }),
});
