import React from 'react';

import styles from './Spinner.scss';

const Spinner = (): JSX.Element => (
    <div className={styles.loader}>Loading...</div>
);

export default Spinner;