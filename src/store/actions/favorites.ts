import { Action } from 'typings/global';
import { FavoriteProductIds } from 'typings/favorites';

import {
    SET_FAVORITES_TO_STATE,
    ADD_PRODUCT_TO_FAVORITES,
    REMOVE_PRODUCT_FROM_FAVORITES,
    INITIALIZE_FAVORITES,
} from 'store/actionTypes';

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
