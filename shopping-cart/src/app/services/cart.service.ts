import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  isCartVisible: boolean;
  cartVisibleSub: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  cartQuantity: number = 0;
  cartQuantitySub: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  cartAmount: number = 0;
  cartAmountSub: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  cartItems: any[] = [];
  cartItemsSub: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor() {
  }

  toggleCart() {
    this.isCartVisible = !this.isCartVisible;
    this.cartVisibleSub.next(this.isCartVisible);
  }

  updateCart(item, action) {
    const product = this.cartItems && this.cartItems.find(x => x.id == item.id)
    if (product) {
      if (action == "Add") {
        this.cartQuantity = this.cartQuantity + 1;
        this.cartAmount = this.cartAmount + item.price;
        product.quantity += 1;
        product.productPrice = product.quantity * product.price;

      } else if (action == "Remove") {
        this.cartQuantity = this.cartQuantity - 1;
        this.cartAmount = this.cartAmount - item.price;
        product.quantity -= 1;
        product.productPrice = product.quantity * product.price;
        if (product.quantity === 0) {
          this.cartItems = this.cartItems.filter(prod => prod.id !== item.id)
        }
      }
    } else {
      this.cartQuantity = this.cartQuantity + 1;
      this.cartAmount = this.cartAmount + item.price;
      item.quantity = 1;
      item.productPrice = item.quantity * item.price
      this.cartItems.push(item);
    }
    this.cartQuantitySub.next(this.cartQuantity);
    this.cartAmountSub.next(this.cartAmount);
    this.cartItemsSub.next(this.cartItems);

  }
}

