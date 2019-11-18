export enum FilterOptions {
    All = 'All',
    Immovable = 'Immovable',
    Cameras = 'Cameras',
    Auto = 'Auto',
    Laptops = 'Laptops'
}

export type FilterOptionStrings = keyof typeof FilterOptions;
