import React from 'react';

import styles from './FormElementContainer.scss';

type Props = {
    label: string;
    children: string | JSX.Element;
}

const FormElementContainer = ({ label, children }: Props): JSX.Element => (
    <div className={styles.formElementContainer}>
        {label && <p className={styles.label}>{label}</p>}
        {children}
    </div>
);

export default FormElementContainer;
