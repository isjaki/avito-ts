import { put, delay } from 'redux-saga/effects';
import { Action } from '../../typings/global';

import { setPriceFilterToState } from '../actions/filters';

export function* updatePriceFilterSaga(action: Action) {
    yield delay(700);
    yield put(setPriceFilterToState(action.priceFrom, action.priceTo));
}
