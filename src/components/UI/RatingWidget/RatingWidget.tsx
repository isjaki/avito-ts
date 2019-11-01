import React from 'react';
import classnames from 'classnames';

import styles from './RatingWidget.scss';

type Props = {
    rating: number;
}

const RatingWidget = ({ rating }: Props): JSX.Element => {
    const classes = classnames({
        [styles.ratingWidget]: true,
        [styles.high]: rating >= 4,
        [styles.medium]: rating >= 3 && rating < 4,
        [styles.low]: rating < 3,
    });

    return (
        <span className={classes}>
            <i className="fas fa-star" />&nbsp;{rating}
        </span>
    );
}

export default RatingWidget;

