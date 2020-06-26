import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { loadProducts } from './store/action/product.actions';
import { selectProductsList } from './store/selectors/product.selectors';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Product } from './interfaces/product.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RescueModalComponent } from './components/rescue-modal/rescue-modal.component';
import { ApplyModalComponent } from './components/apply-modal/apply-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  list$: Observable<Product[]>;

  constructor(private store: Store, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.store.dispatch(loadProducts());  
    this.initSelectors();
  }


  private initSelectors(){
    this.list$ = this.store.pipe(select(selectProductsList), filter( list => !!list))
    
  }


  openModalRescue(product: Product){
    const modalRef = this.modalService.open(RescueModalComponent);
    modalRef.componentInstance.product = product;
  }

  openPurchase(product: Product){
    const modalRef = this.modalService.open(ApplyModalComponent);
    modalRef.componentInstance.product = product;
  }


}
