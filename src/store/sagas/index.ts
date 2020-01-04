import { all, takeEvery, takeLatest } from 'redux-saga/effects';

import { fetchProductInfoSaga } from './products';
import { updatePriceFilterSaga } from './filters';

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
    UPDATE_PRICE_FILTER,    
} from '../actionTypes';

function* watchProductInfo() {
    yield takeEvery(FETCH_PRODUCT_INFO, fetchProductInfoSaga);
}

function* watchFavorites() {
    yield takeEvery(ADD_PRODUCT_TO_FAVORITES, addProductToFavoritesSaga);
    yield takeEvery(REMOVE_PRODUCT_FROM_FAVORITES, removeProductFromFavoritesSaga);
    yield takeEvery(INITIALIZE_FAVORITES, initializeFavoritesSaga);
}

function* watchFilters() {
    yield takeLatest(UPDATE_PRICE_FILTER, updatePriceFilterSaga);
}

export function* rootSaga() {
    yield all([
        watchProductInfo(),
        watchFavorites(),
        watchFilters(),
    ]);
}
