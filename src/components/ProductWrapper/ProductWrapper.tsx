import React from 'react';

import Products from '../../containers/Products';

import styles from './ProductWrapper.scss';

const ProductWrapper = (): JSX.Element => (
    <main className={styles.productWrapper}>
        <Products />
    </main>
);

export default ProductWrapper;
