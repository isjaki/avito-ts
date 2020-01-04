import { FilterState } from './filters';
import { ProductState } from './products';
import { SortingState } from './sorting';
import { FavoriteState } from './favorites';

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
    readonly favorites: FavoriteState;
};
