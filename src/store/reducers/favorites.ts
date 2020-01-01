import { Action } from 'typings/global';
import { FavoriteState } from 'typings/favorites';

import {
    SET_FAVORITES_TO_STATE,
} from 'store/actionTypes';

const initialState: FavoriteState = {
    favoriteProductIds: {},
};

const setFavoritesToState = (state: FavoriteState, action: Action): FavoriteState => ({
    ...state,
    favoriteProductIds: action.favoriteProductIds,
});

const reducer = (state: FavoriteState = initialState, action: Action): FavoriteState => {
    switch (action.type) {
        case SET_FAVORITES_TO_STATE:
            return setFavoritesToState(state, action);
        default:
            return state;
    }
}

export default reducer;
