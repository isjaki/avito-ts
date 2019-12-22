import { Action } from '../../typings/global';
import { FilterState } from '../../typings/filters';

import { 
    UPDATE_CATEGORY_FILTER,
    SET_PRICE_FILTER_TO_STATE,
    UPDATE_FAVORITES_ONLY_FILTER,
} from '../actionTypes';

const initialState: FilterState = {
    category: 'All',
    priceFrom: 0,
    priceTo: Infinity,
    isFavoritesOnly: false,
};

const updateCategoryFilter = (state: FilterState, action: Action): FilterState => ({
    ...state,
    category: action.categoryType,
});

const setPriceFilterToState = (state: FilterState, action: Action): FilterState => ({
    ...state,
    priceFrom: action.priceFrom,
    priceTo: action.priceTo,
});

const updateFavoritesOnlyFilter = (state: FilterState): FilterState => ({
    ...state,
    isFavoritesOnly: !state.isFavoritesOnly,
});

const reducer = (state: FilterState = initialState, action: Action): FilterState => {
    switch (action.type) {
        case UPDATE_CATEGORY_FILTER:
            return updateCategoryFilter(state, action);
        case SET_PRICE_FILTER_TO_STATE:
            return setPriceFilterToState(state, action);
        case UPDATE_FAVORITES_ONLY_FILTER:
            return updateFavoritesOnlyFilter(state);
        default:
            return state;
    }
};

export default reducer;
