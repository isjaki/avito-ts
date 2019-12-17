export interface FavoriteProductIds {
    [id: string]: true;
};

export interface FavoriteState {
    readonly favoriteProductIds: FavoriteProductIds;
};