import React, { useState, useEffect } from 'react';

import styles from './PriceFilter.scss';

type Props = {
    onPriceChange: (priceFrom: number, priceTo: number) => void;
}

const PriceFilter = ({ onPriceChange }: Props): JSX.Element => {
    const [priceFrom, setPriceFrom] = useState('');
    const [priceTo, setPriceTo] = useState('');

    const isNumber = (input: string): boolean => {
        return /^[0-9]*\.?[0-9]*$/.test(input);
    }

    const handlePriceFromChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const inputValue: string = event.target.value;
        if (!isNumber(inputValue)) return;

        setPriceFrom(inputValue);
    }

    const handlePriceToChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const inputValue: string = event.target.value;
        if (!isNumber(inputValue)) return;

        setPriceTo(inputValue);
    }

    useEffect(() => {
        const priceFromNumber: number = parseFloat(priceFrom) || 0;
        const priceToNumber: number = parseFloat(priceTo) || Infinity;

        onPriceChange(priceFromNumber, priceToNumber);
    }, [priceFrom, priceTo]);

    return (
        <div className={styles.priceFilter}>
            <label htmlFor="priceFrom" className={styles.priceLabel}>
                <span>C</span>
                <input
                    type="text"
                    id="priceFrom"
                    value={priceFrom}
                    className={styles.priceInput}
                    autoComplete="off"
                    onChange={handlePriceFromChange}
                />
            </label>
            <label htmlFor="priceTo" className={styles.priceLabel}>
                <span>До</span>
                <input
                    type="text"
                    id="priceTo"
                    value={priceTo}
                    className={styles.priceInput}
                    autoComplete="off"
                    onChange={handlePriceToChange}
                />
            </label>
        </div>
    );
}

export default PriceFilter;