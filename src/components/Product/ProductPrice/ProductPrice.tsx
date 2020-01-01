import React from 'react';

import { formatPrice } from 'helpers/helpers';

import styles from 'components/Product/ProductPrice/ProductPrice.scss';

type Props = {
    price: number;
}

const ProductPrice = ({ price }: Props): JSX.Element => (
    <div className={styles.price}>
        {formatPrice(price.toString())} &#8381;
    </div>
);

export default ProductPrice;
