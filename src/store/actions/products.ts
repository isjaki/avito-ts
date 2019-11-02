import { normalize, schema } from 'normalizr';

import { Action } from '../../typings/global';
import { Product } from '../../typings/products';
import { Sellers } from '../../typings/sellers';

import {
    FETCH_PRODUCT_INFO_START,
    FETCH_PRODUCT_INFO_FAIL,
    FETCH_PRODUCT_INFO_SUCCESS,
    FETCH_SELLERS_SUCCESS,
    SET_FAVORITES_TO_STATE,
    FETCH_PRODUCT_INFO,
} from '../actionTypes';

export const fetchProductInfoStart = (): Action => ({
    type: FETCH_PRODUCT_INFO_START,
});

export const fetchProductInfoFail = (): Action => ({
    type: FETCH_PRODUCT_INFO_FAIL,
});

export const fetchProductInfoSuccess = (products: Product[]): Action => ({
    type: FETCH_PRODUCT_INFO_SUCCESS,
    products,
});

export const fetchSellersSuccess = (sellers: Sellers): Action => ({
    type: FETCH_SELLERS_SUCCESS,
    sellers,
});

