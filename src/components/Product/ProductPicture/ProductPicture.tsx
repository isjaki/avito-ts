import React from 'react';
import LazyLoad from 'react-lazy-load';

import Styles from 'components/Product/ProductPrice/ProductPrice.scss';

type Props = {
    pictures: string[];
};

const ProductPicture = ({ pictures }: Props): JSX.Element => (
    <div className={Styles.productPicture}>
        <LazyLoad offsetVertical={document.documentElement.clientHeight}>
            <img alt="product" src={pictures[0]} />
        </LazyLoad>
        <div className={Styles.extraPicturesNumber}><span>+{pictures.length - 1}</span></div>
    </div>
);

export default ProductPicture;
