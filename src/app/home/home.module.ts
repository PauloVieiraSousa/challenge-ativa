import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import  * as fromProducts from './store/reducer/product.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './store/effects/product.effects';
import { RescueModalComponent } from './components/rescue-modal/rescue-modal.component';
import { NgxMaskModule } from 'ngx-mask';
import { ApplyModalComponent } from './components/apply-modal/apply-modal.component';


@NgModule({
  declarations: [HomeComponent, RescueModalComponent, ApplyModalComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NgxMaskModule.forChild(),
    StoreModule.forFeature(fromProducts.productFeatureKey, fromProducts.reducer),
    EffectsModule.forFeature([ProductEffects])
  ]
})
export class HomeModule {
}
