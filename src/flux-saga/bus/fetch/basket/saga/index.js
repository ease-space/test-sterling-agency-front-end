import { asyncTypes } from './asyncTypes';
import { callFetchBasketProductsWorker } from './workers/fetchBasketProducts';

import { takeEvery } from 'redux-saga/effects';

export function* basketWatchersSagas() {
  yield takeEvery(
    asyncTypes.SET_FETCH_BASKET_PRODUCT_ASYNC,
    callFetchBasketProductsWorker,
  );
}
