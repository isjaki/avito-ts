import React from 'react';

import styles from './Backdrop.scss';

type Props = {
    isVisible: boolean,
    onClick: () => void
};

const Backdrop = ({ isVisible, onClick }: Props): null | JSX.Element => (
    isVisible ? <div className={styles.backdrop} onClick={onClick} role="presentation"></div> : null
);

export default Backdrop;
