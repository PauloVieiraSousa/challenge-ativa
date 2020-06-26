import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromActions from '../action/product.actions';
import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProductApiService } from '../../services/product-api.service';

@Injectable()
export class ProductEffects {

  loadProducts$ = createEffect( () => {
    return this.actions$.pipe(
      ofType(fromActions.loadProducts),
      switchMap( () => {
        return this.productApiService.getProductList()
        .pipe(
          map( data => {
            return fromActions.loadProductsSuccess({data});
          }),
          catchError(error => (of(fromActions.loadProductsFailure({error}))))
        )
      })
    )
  })

  constructor(private actions$: Actions, private productApiService: ProductApiService) {}

}
