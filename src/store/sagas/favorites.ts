import { put } from 'redux-saga/effects';

import { Action } from 'typings/global';

import { setFavoritesToState } from 'store/actions/favorites';

export function* addProductToFavoritesSaga(action: Action) {
    let favoriteProductIds = yield localStorage.getItem('favoriteProductIds');
    if (favoriteProductIds === null) return;

    favoriteProductIds = yield JSON.parse(favoriteProductIds);
    favoriteProductIds[action.productId] = true;
    yield localStorage.setItem('favoriteProductIds', JSON.stringify(favoriteProductIds));

    yield put(setFavoritesToState(favoriteProductIds));
}

export function* removeProductFromFavoritesSaga(action: Action) {
    let favoriteProductIds = yield localStorage.getItem('favoriteProductIds');
    if (favoriteProductIds === null) return;

    delete favoriteProductIds[action.productId];
    yield localStorage.setItem('favoriteProductIds', JSON.stringify(favoriteProductIds));

    yield put(setFavoritesToState(favoriteProductIds));
}

export function* initializeFavoritesSaga() {
    let favoriteProductIds = yield localStorage.getItem('favoriteProductIds');
    if (favoriteProductIds === null) {
        yield localStorage.setItem('favoriteProductIds', '{}');
        favoriteProductIds = {};
    } else {
        favoriteProductIds = yield JSON.parse(favoriteProductIds);
    }
    
    yield put(setFavoritesToState(favoriteProductIds));
}
