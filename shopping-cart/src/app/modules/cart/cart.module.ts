import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { RouterModule } from '@angular/router';

const routes = [{ path: '', component: CartComponent}]

@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [CartComponent]
})
export class CartModule { }
