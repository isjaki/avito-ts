import React from 'react';

import styles from './ErrorMessage.scss';

const ErrorMessage = () => (
    <div className={styles.errorMessage}>
        Ошибка сети!
    </div>
);

export default ErrorMessage;