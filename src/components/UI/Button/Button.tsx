import React from 'react';
import classnames from 'classnames';

import { Action } from '../../../typings/global';

import styles from './Button.scss';

type Props = {
    buttonType?: string,
    isActive?: boolean,
    onClick: () => void | Action,
    children?: string | JSX.Element,
    tooltip?: string
}

const Button = ({
    children,
    buttonType,
    isActive,
    onClick,
    tooltip
}: Props): JSX.Element => {
    const classes = classnames({
        [styles.button]: true,
        [styles.active]: isActive,
        [styles.pickFavorites]: buttonType === 'pickFavorites',
        [styles.addToFavorites]: buttonType === 'addToFavorites',
    });

    let buttonContent = null;
    switch (buttonType) {
        case 'pickFavorites':
            buttonContent = <span><i className="fas fa-heart" /> Только избранное</span>;
            break;
        case 'addToFavorites':
            buttonContent = <i className="fas fa-heart" />;
            break;
        default:
            buttonContent = children;
    }

    return (
        <button
            type="button"
            className={classes}
            onClick={onClick}
            title={tooltip}
        >
            {buttonContent}
        </button>
    );
}

export default Button;
