export enum SortingOptions {
    Default = 'Default',
    Popularity = 'Popularity',
    Price = 'Price',
};

export type SortingOptionStrings = keyof typeof SortingOptions;

export interface SortingState {
    readonly sortingOption: SortingOptionStrings;
};
