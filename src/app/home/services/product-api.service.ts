import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { list } from '../mock/mock';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  constructor() { }


  getProductList(): Observable<any> {
    return of(list);
  }


}
