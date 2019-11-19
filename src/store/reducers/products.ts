import { Product, FavoriteProductIds } from '../../typings/products';
import { Sellers } from '../../typings/sellers';
import { Action } from '../../typings/global';

import {
    FETCH_PRODUCT_INFO_START,
    FETCH_PRODUCT_INFO_FAIL,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_SELLERS_SUCCESS,
    SET_FAVORITES_TO_STATE,
} from '../actionTypes';

type State = {
    products: Product[],
    sellers: Sellers,
    favoriteProductIds: FavoriteProductIds,
    loading: boolean,
    error: boolean,
};

const initialState: State = {
    products: [],
    sellers: {},
    favoriteProductIds: {},
    loading: false,
    error: false,
}

const fetchProductInfoStart = (state: State): State => ({
    ...state,
    loading: true,
    error: false,
});

const fetchProductInfoFail = (state: State): State => ({
    ...state,
    loading: false,
    error: true,
});

const fetchProductsSuccess = (state: State, action: Action): State => ({
    ...state,
    loading: false,
    products: action.products,
});

const fetchSellersSuccess = (state: State, action: Action): State => ({
    ...state,
    sellers: action.sellers,
});

const setFavoritesToState = (state: State, action: Action): State => ({
    ...state,
    favoriteProductIds: action.favoriteProductIds,
});

const reducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case FETCH_PRODUCT_INFO_START:
            return fetchProductInfoStart(state);
        case FETCH_PRODUCT_INFO_FAIL:
            return fetchProductInfoFail(state);
        case FETCH_SELLERS_SUCCESS:
            return fetchSellersSuccess(state, action);
        case FETCH_PRODUCTS_SUCCESS:
            return fetchProductsSuccess(state, action);
        case SET_FAVORITES_TO_STATE:
            return setFavoritesToState(state, action);
        default: 
            return state;
    }
};

export default reducer;