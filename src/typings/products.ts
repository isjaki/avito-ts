import { Sellers } from './sellers';

export interface Product {
    readonly id: string;
    readonly title: string;
    readonly price: number;
    readonly category: string;
    readonly pictures: string[];
    readonly relationships: { seller: string };
};

export interface ProductState {
    readonly products: Product[];
    readonly sellers: Sellers;
    readonly loading: boolean;
    readonly error: boolean;
};
