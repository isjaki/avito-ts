import { Action } from 'typings/global';
import { FilterOptionStrings } from 'typings/filters';

import { 
    UPDATE_CATEGORY_FILTER,
    UPDATE_PRICE_FILTER,
    UPDATE_FAVORITES_ONLY_FILTER,
    SET_PRICE_FILTER_TO_STATE,
} from 'store/actionTypes';

export const updateCategoryFilter = (categoryType: FilterOptionStrings): Action => ({
    type: UPDATE_CATEGORY_FILTER,
    categoryType,
});

export const updatePriceFilter = (priceFrom: number, priceTo: number): Action => ({
    type: UPDATE_PRICE_FILTER,
    priceFrom,
    priceTo,
});

export const setPriceFilterToState = (priceFrom: number, priceTo: number): Action => ({
    type: SET_PRICE_FILTER_TO_STATE,
    priceFrom,
    priceTo,
});

export const updateFavoritesOnlyFilter = () => ({
    type: UPDATE_FAVORITES_ONLY_FILTER,
});
