import { all, takeEvery } from 'redux-saga/effects';

import { 
    fetchProductInfoSaga,
} from './products';

import {
    addProductToFavoritesSaga,
    removeProductFromFavoritesSaga,
    initializeFavoritesSaga,
} from './favorites';

import { 
    FETCH_PRODUCT_INFO,
    ADD_PRODUCT_TO_FAVORITES,
    REMOVE_PRODUCT_FROM_FAVORITES,
    INITIALIZE_FAVORITES,       
} from '../actionTypes';

function* watchProductInfo() {
    yield takeEvery(FETCH_PRODUCT_INFO, fetchProductInfoSaga);
}

function* watchFavorites() {
    yield takeEvery(ADD_PRODUCT_TO_FAVORITES, addProductToFavoritesSaga);
    yield takeEvery(REMOVE_PRODUCT_FROM_FAVORITES, removeProductFromFavoritesSaga);
    yield takeEvery(INITIALIZE_FAVORITES, initializeFavoritesSaga);
}

export function* rootSaga() {
    yield all([
        watchProductInfo(),
        watchFavorites(),
    ]);
}
