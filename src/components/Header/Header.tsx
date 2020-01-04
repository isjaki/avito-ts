import React, { useState } from 'react';

import FiltersWidget from '../FiltersWidget/FiltersWidget';
import Sorting from '../../containers/Sorting';
import SideDrawer from '../SideDrawer/SideDrawer';
import HamburgerButton from '../UI/Button/HamburgerButton/HamburgerButton';

import styles from './Header.scss';

const Header = (): JSX.Element => {
    const [sideDrawerOpened, toggleSideDrawer] = useState(false);

    return (
        <header className={styles.header}>
            <SideDrawer
                isSideDrawerOpened={sideDrawerOpened}
                onClick={() => toggleSideDrawer(!sideDrawerOpened)}
            >
                <FiltersWidget />
            </SideDrawer>
            <HamburgerButton
                isOpened={sideDrawerOpened}
                onClick={() => toggleSideDrawer(!sideDrawerOpened)}
            />
            <Sorting />
        </header>
    );
}

export default Header;
