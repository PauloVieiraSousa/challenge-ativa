import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProduct from '../reducer/product.reducer';


export const selectFeature = createFeatureSelector<fromProduct.State>(
    fromProduct.productFeatureKey
)

export const selectProductsList = createSelector(
    selectFeature,
    (state: fromProduct.State) => state.list
);

export const selectProductsLoading = createSelector(
    selectFeature,
    (state: fromProduct.State) => state.loading
);