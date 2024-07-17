import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ProductPageComponent,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ProductsModule { }
