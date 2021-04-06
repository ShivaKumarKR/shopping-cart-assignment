import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'shopping-cart-header',
  templateUrl: './shopping-cart-header.component.html',
  styleUrls: ['./shopping-cart-header.component.scss']
})
export class ShoppingCartHeaderComponent implements OnInit {

  isCartVisible: Observable<boolean>;
  cartQuantity: Observable<number>;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.isCartVisible = this.cartService.cartVisibleSub;
    this.cartQuantity = this.cartService.cartQuantitySub;
    
    
  }

  toggleCart() {
    this.cartService.toggleCart();
  }
}
