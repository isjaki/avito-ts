import React, { Fragment } from 'react';
import classnames from 'classnames';

import Backdrop from '../UI/Backdrop/Backdrop';
import styles from './SideDrawer.scss';

type Props = {
    children: JSX.Element;
    isSideDrawerOpened: boolean;
    onClick: () => void;
}

const SideDrawer = ({ children, isSideDrawerOpened, onClick }: Props): JSX.Element => {
    const classes = classnames({
        [styles.sideDrawer]: true,
        [styles.opened]: isSideDrawerOpened,
    });

    return (
        <Fragment>
            <div className={classes}>
                {children}
            </div>
            <Backdrop isVisible={isSideDrawerOpened} onClick={onClick} />
        </Fragment>
    );
}

export default SideDrawer;