export enum FilterOptions {
    all = 'all',
    immovable = 'immovable',
    cameras = 'cameras',
    auto = 'auto',
    laptops = 'laptops',
}

export type FilterOptionStrings = keyof typeof FilterOptions;

export interface FilterState {
    readonly category: FilterOptionStrings;
    readonly priceFrom: number;
    readonly priceTo: number;
    readonly isFavoritesOnly: boolean;
}
