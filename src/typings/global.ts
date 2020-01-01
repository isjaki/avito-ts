import { FilterState } from 'typings/filters';
import { ProductState } from 'typings/products';
import { SortingState } from 'typings/sorting';

export interface Action {
    type: string;
    [payload: string]: any;
};

// export interface Action<T> {
//     type: string;
//     payload: T;
// }

export interface Option<T> {
    value: T;
    displayValue: string;
};

export interface RootState {
    readonly products: ProductState;
    readonly filters: FilterState;
    readonly sorting: SortingState;
};
