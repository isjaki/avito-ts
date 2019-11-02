export interface Product {
    readonly id: string;
    readonly title: string;
    readonly price: number;
    readonly category: string;
    readonly pictures: string[];
    readonly relationships: { seller: string };
}