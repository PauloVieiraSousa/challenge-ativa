import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { list } from '../mock/mock';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  constructor() { }


  getProductList(): Observable<Product[]> {
    return of(list);
  }


}
