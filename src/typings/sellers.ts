export interface Seller {
    name: string;
    rating: number;
}

export interface Sellers {
    [id: string]: Seller;
}