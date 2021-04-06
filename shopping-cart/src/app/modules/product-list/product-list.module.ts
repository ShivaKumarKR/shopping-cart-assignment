import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { RouterModule } from '@angular/router';
import { CustomButtonModule } from 'src/app/shared/custom-button/custom-button.module';

const routes = [{path: '', component: ProductListComponent}]

@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    CustomButtonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductListModule { }
