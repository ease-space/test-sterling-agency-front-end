import { basketActions } from '../../actions';
import { fetchActionsAsync } from '../../../../ui/fetch/saga/asyncActions';

import { types } from '../../types';

import { put, delay } from 'redux-saga/effects';

export function* callFetchBasketProductsWorker() {
  try {
    yield put(basketActions.setFetchBasketProductsRequest());
    yield put(
      fetchActionsAsync.setFetchStateAsync({
        isFetch: true,
        type: types.SET_FETCH_BASKET_PRODUCTS_REQUEST,
      }),
    );

    console.log('FETCH BASKED START');

    yield delay(5000);

    console.log('FETCH BASKED COMPLETE');

    yield put(basketActions.setFetchBasketProductsSuccess());
  } catch (error) {
    yield put(basketActions.setFetchBasketProductsError());
    yield put(
      fetchActionsAsync.setFetchEmitErrorAsync({
        error: error,
        type: types.SET_FETCH_BASKET_PRODUCTS_REQUEST,
      }),
    );
  } finally {
    yield put(
      fetchActionsAsync.setFetchStateAsync({
        type: types.SET_FETCH_BASKET_PRODUCTS_REQUEST,
      }),
    );
  }
}
