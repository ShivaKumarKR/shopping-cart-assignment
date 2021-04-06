import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartHeaderComponent } from './shopping-cart-header/shopping-cart-header.component';
import { ShoppingCartFooterComponent } from './shopping-cart-footer/shopping-cart-footer.component';
import { RouterModule } from '@angular/router';
import { CartModule } from '../modules/cart/cart.module';


@NgModule({
  declarations: [ShoppingCartHeaderComponent, ShoppingCartFooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    CartModule
  ],
  exports: [ShoppingCartHeaderComponent, ShoppingCartFooterComponent]
})
export class SharedModule { }
