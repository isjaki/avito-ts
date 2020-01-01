import React from 'react';

import RatingWidget from 'components/UI/RatingWidget/RatingWidget';

import styles from 'components/Product/ProductSellerInfo/ProductSellerInfo.scss';

type Props = {
    name: string;
    rating: number;
}

const ProductSellerInfo = ({ name, rating }: Props): JSX.Element => (
    <p className={styles.productSellerInfo}>
        {name} <RatingWidget rating={rating} />
    </p>
);

export default ProductSellerInfo;
