import { put } from 'redux-saga/effects';
import { normalize, schema } from 'normalizr';

import { Seller } from '../../typings/sellers';

import {
    fetchProductInfoStart,
    fetchSellersSuccess,
    fetchProductsSuccess,
    fetchProductInfoFail,
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
        }),
    });
    const sellerListSchema = new schema.Array(sellerSchema);
    const normalizedSellers = normalize(sellers, sellerListSchema);

    yield put(fetchSellersSuccess(normalizedSellers.entities.sellers));
    yield put(fetchProductsSuccess(products));
}
