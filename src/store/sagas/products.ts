import { put } from 'redux-saga/effects';
import { normalize, schema } from 'normalizr';

import { Seller } from '../../typings/sellers';

import {
    fetchProductInfoStart,
    fetchSellersSuccess,
    fetchProductsSuccess,
    fetchProductInfoFail,
} from '../actions/products';

export function* fetchProductInfoSaga() {
    const proxyURL = 'https://cors-anywhere.herokuapp.com/';
    yield put(fetchProductInfoStart());
    
    let sellers = null;
    let products = null;
    try {
        const sellersData = yield fetch(`${proxyURL}http://avito.dump.academy/sellers`);
        sellers = yield sellersData.json();

        const productsData = yield fetch(`${proxyURL}http://avito.dump.academy/products`);
        products = yield productsData.json();
    } catch {
        yield put(fetchProductInfoFail());
        return;
    }
    
    const sellerSchema = new schema.Entity('sellers', {}, {
        processStrategy: (value: Seller) => ({
            name: value.name,
            rating: value.rating,
        }),
    });
    const sellerListSchema = new schema.Array(sellerSchema);
    const normalizedSellers = normalize(sellers.data, sellerListSchema);

    yield put(fetchSellersSuccess(normalizedSellers.entities.sellers));
    yield put(fetchProductsSuccess(products.data));
}
