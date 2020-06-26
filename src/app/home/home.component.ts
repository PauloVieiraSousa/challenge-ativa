import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { loadProducts } from './store/action/product.actions';
import { selectProductsList } from './store/selectors/product.selectors';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  list$: Observable<any>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(loadProducts());  
    this.initSelectors();
  }


  private initSelectors(){
    this.list$ = this.store.pipe(select<any, any>(selectProductsList), filter( list => !!list))
    
  }



}
