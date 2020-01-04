import React from 'react';

import styles from './Sidebar.scss';

type Props = {
    children: JSX.Element;
}

const Sidebar = ({ children }: Props): JSX.Element => (
    <aside className={styles.sidebar}>
        {children}
    </aside>
);

export default Sidebar;
