import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Dispatch } from 'redux';
import { RootState, Action } from '../typings/global';
import { Product } from '../typings/products';
import { Sellers } from '../typings/sellers';
import { FavoriteProductIds } from '../typings/favorites';
import { FilterOptionStrings, FilterOptions } from '../typings/filters';
import { SortingOptionStrings, SortingOptions } from '../typings/sorting';

import {
    initializeFavorites,
    addProductToFavorites,
    removeProductFromFavorites,
} from '../store/actions/favorites';
import { fetchProductInfo } from '../store/actions/products';

import ErrorMessage from '../components/UI/ErrorMessage/ErrorMessage';
import ProductList from '../components/ProductList/ProductList';
import Spinner from '../components/UI/Spinner/Spinner';

type Props = {
    products: Product[];
    sellers: Sellers;
    loading: boolean;
    error: boolean;
    favoriteProductIds: FavoriteProductIds;
    category: FilterOptionStrings;
    priceFrom: number;
    priceTo: number;
    isFavoritesOnly: boolean;
    sortingOption: SortingOptionStrings;
    fetchProducts: () => Action;
    initFavoriteProducts: () => Action;
    addToFavorites: (productId: string) => Action;
    removeFromFavorites: (productId: string) => Action;
};

const Products = ({
    products,
    sellers,
    loading,
    error,
    favoriteProductIds,
    category,
    priceFrom,
    priceTo,
    isFavoritesOnly,
    sortingOption,
    fetchProducts,
    initFavoriteProducts,
    addToFavorites,
    removeFromFavorites,
}: Props): JSX.Element => {
    useEffect(() => {
        fetchProducts();
        initFavoriteProducts();
    }, []);

    const applyFiltersToProducts = (productList: Product[]): Product[] => {
        return productList.filter(product => {
            let isVisible = true;

            if (category !== FilterOptions.All) {
                isVisible = product.category === category;
            }

            isVisible = product.price >= priceFrom
                && product.price <= priceTo
                && isVisible;
            
            if (isFavoritesOnly === true) {
                isVisible = (favoriteProductIds[product.id] === true) && isVisible;
            }

            return isVisible;
        });
    }

    const sortProducts = (productList: Product[]): Product[] => {
        switch (sortingOption) {
            case SortingOptions.Popularity:
                return productList.sort(
                    (a, b) => sellers[b.relationships.seller].rating - sellers[a.relationships.seller].rating
                );
            case SortingOptions.Price:
                return productList.sort((a, b) => a.price - b.price);
            default:
                return productList;
        }
    }

    const filteredProducts = applyFiltersToProducts(products);
    const sortedProducts = sortProducts(filteredProducts);

    if (error) return <ErrorMessage />;

    return loading ? <Spinner />
        : (
            <ProductList
                products={sortedProducts}
                sellers={sellers}
                addProductToFavorites={addToFavorites}
                removeProductFromFavorites={removeFromFavorites}
                favoriteProductIds={favoriteProductIds}
            />
        );
}

const mapStateToProps = (state: RootState) => ({
    products: state.products.products,
    sellers: state.products.sellers,
    loading: state.products.loading,
    error: state.products.error,
    favoriteProductIds: state.favorites.favoriteProductIds,
    category: state.filters.category,
    priceFrom: state.filters.priceFrom,
    priceTo: state.filters.priceTo,
    isFavoritesOnly: state.filters.isFavoritesOnly,
    sortingOption: state.sorting.sortingOption,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    fetchProducts: () => dispatch(fetchProductInfo()),
    initFavoriteProducts: () => dispatch(initializeFavorites()),
    addToFavorites: (productId: string) => dispatch(addProductToFavorites(productId)),
    removeFromFavorites: (productId: string) => dispatch(removeProductFromFavorites(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
