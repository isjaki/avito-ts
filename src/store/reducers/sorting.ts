import { Action } from '../../typings/global';
import { SortingOptionStrings } from '../../typings/sorting';

import { UPDATE_SORTING_OPTION } from '../actionTypes';

type State = {
    sortingOption: SortingOptionStrings,
};

const initialState: State = {
    sortingOption: 'Default',
};

const updateSortingOption = (state: State, action: Action): State => ({
    ...state,
    sortingOption: action.sortingOption,
});

const reducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case UPDATE_SORTING_OPTION:
            return updateSortingOption(state, action);
        default:
            return state;
    }
}

export default reducer;
