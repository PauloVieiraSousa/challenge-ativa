import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { CardComponent } from './components/card/card.component';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [CardComponent, CardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgxMaskModule.forRoot(),
  ],
  exports: [
    ReactiveFormsModule,
    FontAwesomeModule,
    CardComponent
  ]
})
export class SharedModule { 

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
