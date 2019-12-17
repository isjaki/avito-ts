import React from 'react';

import styles from './ErrorMessage.scss';

const ErrorMessage = (): JSX.Element => (
    <div className={styles.errorMessage}>
        Ошибка сети!
    </div>
);

export default ErrorMessage;
