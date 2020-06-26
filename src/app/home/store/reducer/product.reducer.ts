import { Action, createReducer, on } from '@ngrx/store';
import * as fromProductsAction from '../action/product.actions';

export const productFeatureKey = 'product';

export interface State {
  list: [],
  loading: boolean,
  error: any
}

export const initialState: State = {
  list: null,
  loading: false,
  error: null
};


export const reducer = createReducer(
  initialState,
  on(fromProductsAction.loadProducts, (state) => ({
    ...state,
    loading: true
  })),
  on(fromProductsAction.loadProductsSuccess, (state, action) => ({
    ...state,
    list: action.data
  })),
  on(fromProductsAction.loadProductsFailure, (state, action) => ({
    ...state,
    error: action.error
  }))
);

