import { put } from 'redux-saga/effects';
import { normalize, schema } from 'normalizr';

import { Action } from '../../typings/global';
import { Seller } from '../../typings/sellers';

import {
    fetchProductInfoStart,
    fetchSellersSuccess,
    fetchProductsSuccess,
    fetchProductInfoFail,
    setFavoritesToState,
} from '../actions/products';

export async function* fetchProductInfoSaga() {
    const proxyURL = 'https://cors-anywhere.herokuapp.com/';
    yield put(fetchProductInfoStart());
    
    let sellers = null;
    let products = null;
    try {
        const sellersData = await fetch(`${proxyURL}http://avito.dump.academy/sellers`);
        sellers = await sellersData.json();

        const productsData = await fetch(`${proxyURL}http://avito.dump.academy/products`);
        products = await productsData.json();
    } catch {
        yield put(fetchProductInfoFail());
        return;
    }
    
    const sellerSchema = new schema.Entity('sellers', {}, {
        processStrategy: (value: Seller) => ({
            name: value.name,
            rating: value.rating,
        })
    });
    const sellerListSchema = new schema.Array(sellerSchema);
    const normalizedSellers = normalize(sellers, sellerListSchema);

    yield put(fetchSellersSuccess(normalizedSellers.entities.sellers));
    yield put(fetchProductsSuccess(products));
}

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
