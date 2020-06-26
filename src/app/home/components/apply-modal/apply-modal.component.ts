import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-apply-modal',
  templateUrl: './apply-modal.component.html',
  styleUrls: ['./apply-modal.component.scss']
})
export class ApplyModalComponent implements OnInit {

  @Input() product: Product;

  public form: FormGroup;
  public dateMoviment = new Date();

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      movimentValue: ['']
    })
  }


  onCancel(){
    this.activeModal.close()
  }

  onSubmitRescue(){
    this.activeModal.close()
  }

}
