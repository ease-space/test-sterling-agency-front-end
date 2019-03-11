import { asyncTypes } from './asyncTypes';

export const basketActionsAsync = Object.freeze({
  setFetchBasketProductAsync: () => ({
    type: asyncTypes.SET_FETCH_BASKET_PRODUCT_ASYNC,
  }),
});
