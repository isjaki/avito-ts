import { Action } from '../../typings/global';
import { SortingState, SortingOptions } from '../../typings/sorting';

import { UPDATE_SORTING_OPTION } from '../actionTypes';

const initialState: SortingState = {
    sortingOption: SortingOptions.Default,
};

const updateSortingOption = (state: SortingState, action: Action): SortingState => ({
    ...state,
    sortingOption: action.sortingOption,
});

const reducer = (state: SortingState = initialState, action: Action): SortingState => {
    switch (action.type) {
        case UPDATE_SORTING_OPTION:
            return updateSortingOption(state, action);
        default:
            return state;
    }
}

export default reducer;
