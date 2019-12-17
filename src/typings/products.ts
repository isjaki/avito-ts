import { Sellers } from '../typings/sellers';

export interface Product {
    readonly id: string;
    readonly title: string;
    readonly price: number;
    readonly category: string;
    readonly pictures: string[];
    readonly relationships: { seller: string };
};

export interface FavoriteProductIds {
    [id: string]: true;
};

export interface ProductState {
    readonly products: Product[];
    readonly sellers: Sellers;
    readonly favoriteProductIds: FavoriteProductIds;
    readonly loading: boolean;
    readonly error: boolean;
};