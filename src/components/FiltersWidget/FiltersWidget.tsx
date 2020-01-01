import React from 'react';

import Filters from 'containers/Filters';

import styles from 'components/UI/FiltersWidget/FiltersWidget.scss';

const FiltersWidget = (): JSX.Element => (
    <div className={styles.filtersWidget}>
        <h2>Фильтровать объявления</h2>
        <form>
            <Filters />
        </form>
    </div>
);

export default FiltersWidget;
