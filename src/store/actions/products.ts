import { normalize, schema } from 'normalizr';

import {
    FETCH_PRODUCT_INFO_START,
    FETCH_PRODUCT_INFO_FAIL,
    FETCH_PRODUCT_INFO_SUCCESS,
    FETCH_SELLERS_SUCCESS,
    SET_FAVORITES_TO_STATE,
    FETCH_PRODUCT_INFO,
} from '../actionTypes';

interface Action {
    type: string;
    [payload: string]: any;
}

export const fetchProductInfoStart = (): Action => ({
    type: FETCH_PRODUCT_INFO_START,
});

export const fetchProductInfoFail = (): Action => ({
    type: FETCH_PRODUCT_INFO_FAIL,
});

export const fetchProductInfoSuccess = (products): Action => ({
    type: FETCH_PRODUCT_INFO_SUCCESS,
    products,
});

export const fetchSellersSuccess = (sellers): Action => ({
    type: FETCH_SELLERS_SUCCESS,
    sellers,
});

