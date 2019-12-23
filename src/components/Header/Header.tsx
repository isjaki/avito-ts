import React, { useState } from 'react';

import FiltersWidget from 'components/FiltersWidget/FiltersWidget';
import Sorting from 'containers/Sorting';
import SideDrawer from 'components/SideDrawer/SideDrawer';
import HamburgerButton from 'components/UI/Button/HamburgerButton/HamburgerButton';

import styles from 'components/Header/Header.scss';

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
