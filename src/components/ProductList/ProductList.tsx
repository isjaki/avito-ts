import React, { Fragment } from 'react';

import { Product } from '../../typings/products';
import { Sellers } from '../../typings/sellers';
import { Action } from '../../typings/global';
import { FavoriteProductIds } from '../../typings/favorites';

import ProductCard from '../ProductCard/ProductCard';

type Props = {
    products: Product[];
    sellers: Sellers;
    favoriteProductIds: FavoriteProductIds;
    addProductToFavorites: (productId: string) => Action;
    removeProductFromFavorites: (productId: string) => Action;
};

const ProductList = ({
    products,
    sellers,
    favoriteProductIds,
    addProductToFavorites,
    removeProductFromFavorites,
}: Props): JSX.Element => (
    <Fragment>
        {products.map(product => {
            const isProductFavorite = favoriteProductIds[product.id] === true;
            const onAddToFavoritesButtonClick = isProductFavorite
                ? removeProductFromFavorites
                : addProductToFavorites;
            
            return (
                <ProductCard
                    key={product.id}
                    title={product.title}
                    price={product.price}
                    pictures={product.pictures}
                    isProductFavorite={isProductFavorite}
                    sellerInfo={sellers[product.relationships.seller]}
                    onAddToFavoritesButtonClick={() => onAddToFavoritesButtonClick(product.id)}
                />
            );
        })}
    </Fragment>
);

export default ProductList;
