import React from 'react';

import classnames from 'classnames';

import styles from './HamburgerButton.scss';

type Props = {
    isOpened: boolean,
    onClick: () => void,
}

const HamburgerButton = ({ isOpened, onClick }: Props): JSX.Element => {
    const classes = classnames({
        [styles.hamburgerButton]: true,
        [styles.opened]: isOpened,
    });

    return (
        <div
            className={classes}
            onClick={onClick}
            role="button"
            tabIndex={0}
        >
            <div />
            <div />
            <div />
        </div>
    );
}

export default HamburgerButton;
