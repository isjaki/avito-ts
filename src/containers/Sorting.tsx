import React from 'react';
import { connect } from 'react-redux';

import { SortingOptionStrings, SortingOptions } from '../typings/sorting';
import { Action, Option } from '../typings/global';
import { Dispatch } from 'redux';

import { updateSortingOption } from '../store/actions/sorting';

import Selector from '../components/UI/Selector/Selector';

type Props = {
    updateOption: (sortingOption: SortingOptionStrings) => Action;
}

const sortingOptions: Option<SortingOptionStrings>[] = [
    { value: SortingOptions.Default, displayValue: 'По умолчанию' },
    { value: SortingOptions.Popularity, displayValue: 'По популярности' },
    { value: SortingOptions.Price, displayValue: 'По возрастанию цены' },
];

const Sorting = ({ updateOption }: Props): JSX.Element => (
    <Selector
        initialValue={SortingOptions.Default}
        onSelectorChange={updateOption}
        options={sortingOptions}
    />
);

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    updateOption: (sortingOption: SortingOptionStrings) => dispatch(updateSortingOption(sortingOption)),
});

export default connect(null, mapDispatchToProps)(Sorting);
