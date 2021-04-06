import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartQuantity: Observable<number>;
  totalAmount: Observable<number>;
  cartProducts: Observable<any[]>;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartQuantity = this.cartService.cartQuantitySub;
    this.totalAmount = this.cartService.cartAmountSub;
    this.cartProducts = this.cartService.cartItemsSub;
  }

  updateQuantity(item, action) {
    this.cartService.updateCart(item, action);
  }

  closeCart() {
    this.cartService.toggleCart();
  }

}
