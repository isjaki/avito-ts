import { Action } from 'typings/global';
import { SortingOptionStrings } from 'typings/sorting';

import { UPDATE_SORTING_OPTION } from 'store/actionTypes';

export const updateSortingOption = (sortingOption: SortingOptionStrings): Action => ({
    type: UPDATE_SORTING_OPTION,
    sortingOption,
});
