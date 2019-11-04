import { Action } from '../../typings/global';
import { Product, FavoriteProductIds } from '../../typings/products';
import { Sellers } from '../../typings/sellers';

import {
    FETCH_PRODUCT_INFO,
    FETCH_PRODUCT_INFO_START,
    FETCH_PRODUCT_INFO_FAIL,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_SELLERS_SUCCESS,
    SET_FAVORITES_TO_STATE,
    ADD_PRODUCT_TO_FAVORITES,
    REMOVE_PRODUCT_FROM_FAVORITES,
    INITIALIZE_FAVORITES,
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

export const setFavoritesToState = (favoriteProductIds: FavoriteProductIds): Action => ({
    type: SET_FAVORITES_TO_STATE,
    favoriteProductIds,
});

export const addProductToFavorites = (productId: string): Action => ({
    type: ADD_PRODUCT_TO_FAVORITES,
    productId,
});

export const removeProductFromFavorites = (productId: string): Action => ({
    type: REMOVE_PRODUCT_FROM_FAVORITES,
    productId,
});

export const initializeFavorites = (): Action => ({
    type: INITIALIZE_FAVORITES,
});

