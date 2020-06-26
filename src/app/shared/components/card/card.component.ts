import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/home/interfaces/product.interface';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() product: Product;
  @Output() rescue: EventEmitter<Product> = new EventEmitter();
  @Output() apply: EventEmitter<Product> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  openRescue(product: Product){
    this.rescue.emit(product);
  }

  openApply(product: Product){
    this.apply.emit(product);
  }

  

}
