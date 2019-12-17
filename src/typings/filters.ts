export enum FilterOptions {
    All = 'All',
    Immovable = 'Immovable',
    Cameras = 'Cameras',
    Auto = 'Auto',
    Laptops = 'Laptops'
}

export type FilterOptionStrings = keyof typeof FilterOptions;

export interface FilterState {
    readonly category: FilterOptionStrings;
    readonly priceFrom: number;
    readonly priceTo: number;
    readonly isFavoritesOnly: boolean;
}
