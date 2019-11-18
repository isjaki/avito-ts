import { Action } from '../../typings/global';
import { FilterOptionStrings } from '../../typings/filters';

import { 
    UPDATE_CATEGORY_FILTER,
    UPDATE_PRICE_FILTER,
    UPDATE_FAVORITES_ONLY_FILTER,
} from '../actionTypes';

type State = {
    category: FilterOptionStrings,
    price: {
        from: number,
        to: number,
    },
    isFavoritesOnly: boolean,
};

const initialState: State = {
    category: 'All',
    price: {
        from: 0,
        to: Infinity,
    },
    isFavoritesOnly: false,
};

const updateCategoryFilter = (state: State, action: Action): State => ({
    ...state,
    category: action.categoryType,
});

const updatePriceFilter = (state: State, action: Action): State => ({
    ...state,
    price: {
        from: action.priceFrom,
        to: action.priceTo,
    },
});

const updateFavoritesOnlyFilter = (state: State): State => ({
    ...state,
    isFavoritesOnly: !state.isFavoritesOnly,
});

const reducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case UPDATE_CATEGORY_FILTER:
            return updateCategoryFilter(state, action);
        case UPDATE_PRICE_FILTER:
            return updatePriceFilter(state, action);
        case UPDATE_FAVORITES_ONLY_FILTER:
            return updateFavoritesOnlyFilter(state);
        default:
            return state;
    }
};

export default reducer;
