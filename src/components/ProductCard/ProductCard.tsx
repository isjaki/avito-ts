import React from 'react';

import { Action } from 'typings/global';
import { Seller } from 'typings/sellers';

import ProductSellerInfo from 'components/ProductCard/ProductSellerInfo/ProductSellerInfo';
import ProductPicture from 'components/ProductCard/ProductPicture/ProductPicture';
import ProductPrice from 'components/ProductCard/ProductPrice/ProductPrice';
import Button from 'components/UI/Button/Button';

import styles from 'components/Product/Product.scss';

type Props = {
    title: string;
    price: number;
    pictures: string[];
    sellerInfo: Seller;
    isProductFavorite: boolean;
    onAddToFavoritesButtonClick: () => Action;
};

const ProductCard = ({
    title,
    price,
    pictures,
    sellerInfo,
    isProductFavorite,
    onAddToFavoritesButtonClick,
}: Props): JSX.Element => (
    <div className={styles.product}>
        <ProductPicture pictures={pictures} />
        <div className={styles.mainInfo}>
            <h2 className={styles.title}>{title}</h2>
            <ProductPrice price={price} />
            <ProductSellerInfo name={sellerInfo.name} rating={sellerInfo.rating} />
        </div>
        <Button
            buttonType="addToFavorites"
            isActive={isProductFavorite}
            tooltip="добавить в избранное"
            onClick={onAddToFavoritesButtonClick}
        />
    </div>
);

export default ProductCard;
