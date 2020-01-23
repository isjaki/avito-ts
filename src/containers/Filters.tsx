import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { Action, Option, RootState } from '../typings/global';
import { FilterOptionStrings, FilterOptions } from '../typings/filters';
import { Dispatch } from 'redux';

import { 
    updateCategoryFilter,
    updatePriceFilter,
    updateFavoritesOnlyFilter,
} from '../store/actions/filters';

import FormElementContainer from '../components/UI/FormElementContainer/FormElementContainer';
import Selector from '../components/UI/Selector/Selector';
import PriceFilter from '../components/UI/PriceFilter/PriceFilter';
import Button from '../components/UI/Button/Button';

type Props = {
    updateCategory: (categoryType: FilterOptionStrings) => Action,
    updatePrice: (priceFrom: number, priceTo: number) => Action,
    updateFavoritesOnly: () => Action,
    isFavoritesOnly: boolean,
};

const selectorOptions: Option<FilterOptionStrings>[] = [
    { value: FilterOptions.all, displayValue: 'Все' },
    { value: FilterOptions.immovable, displayValue: 'Недвижимость' },
    { value: FilterOptions.cameras, displayValue: 'Фотоаппараты' },
    { value: FilterOptions.auto, displayValue: 'Автомобили' },
    { value: FilterOptions.laptops, displayValue: 'Ноутбуки' },
];

const Filters = ({
    updateCategory,
    updatePrice,
    updateFavoritesOnly,
    isFavoritesOnly
}: Props): JSX.Element => (
    <Fragment>
        <FormElementContainer label="По категории:">
            <Selector
                options={selectorOptions}
                initialValue={FilterOptions.all}
                onSelectorChange={updateCategory}
            />
        </FormElementContainer>
        <FormElementContainer label="По цене:">
            <PriceFilter onPriceChange={updatePrice} />
        </FormElementContainer>
        <FormElementContainer>
            <Button
                buttonType="pickFavorites"
                onClick={updateFavoritesOnly}
                isActive={isFavoritesOnly}
            />
        </FormElementContainer>
    </Fragment>
);

const mapStateToProps = (state: RootState) => ({
    isFavoritesOnly: state.filters.isFavoritesOnly,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    updateCategory: (categoryType: FilterOptionStrings) => dispatch(updateCategoryFilter(categoryType)),
    updatePrice: (priceFrom: number, priceTo: number) => dispatch(updatePriceFilter(priceFrom, priceTo)),
    updateFavoritesOnly: () => dispatch(updateFavoritesOnlyFilter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
