import { Action } from '../../typings/global';
import { Product } from '../../typings/products';
import { Sellers } from '../../typings/sellers';

import {
    FETCH_PRODUCT_INFO,
    FETCH_PRODUCT_INFO_START,
    FETCH_PRODUCT_INFO_FAIL,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_SELLERS_SUCCESS,
} from '../actionTypes';

export const fetchProductInfo = (): Action => ({
    type: FETCH_PRODUCT_INFO,
});

export const fetchProductInfoStart = (): Action => ({
    type: FETCH_PRODUCT_INFO_START,
});

export const fetchProductInfoFail = (): Action => ({
    type: FETCH_PRODUCT_INFO_FAIL,
});

export const fetchProductsSuccess = (products: Product[]): Action => ({
    type: FETCH_PRODUCTS_SUCCESS,
    products,
});

export const fetchSellersSuccess = (sellers: Sellers): Action => ({
    type: FETCH_SELLERS_SUCCESS,
    sellers,
});
