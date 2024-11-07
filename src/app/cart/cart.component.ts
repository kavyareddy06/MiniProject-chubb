// cart.component.ts
import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from '../cart.service';
import { CommonModule } from '@angular/common';
import { OrderService,Order } from '../order.service';
@Component({
  selector: 'app-cart',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './cart.component.html',
})
export class CartComponent /* implements OnInit*/ {
  /*cartItems: CartItem[] = [];
  totalPrice = 0;*/
  cartItems = this.cartService.getItems();
  constructor(private cartService: CartService) {}
  
  /*ngOnInit() {
    this.cartItems = this.cartService.getItems();
    this.totalPrice = this.cartService.getTotalPrice();
  }*/


  increaseQuantity(item: any) {
    item.quantity += 1;
    this.cartService.updateItemQuantity(item.name, item.quantity);
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity -= 1;
      this.cartService.updateItemQuantity(item.name, item.quantity);
    } else {
      this.cartService.removeItem(item.name);
    }
  }

  getTotalCost() {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
  async checkout() {
    const order: Order = {
      items: [...this.cartItems], 
      totalCost: this.getTotalCost(),
      timestamp: new Date().toISOString(),
    };

    try {
      const response = await fetch('https://67271ec6302d03037e6f76c2.mockapi.io/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
      });

      if (!response.ok) {
        throw new Error('Failed to place order');
      }

      const result = await response.json();
      alert('Order placed successfully!');
      this.storeOrderInSession(order); 
      this.cartService.clearCart(); 
      this.cartItems = []; 

    } catch (error) {
      console.error('Error:', error);
      alert('Failed to place order.');
    }
  }

  private storeOrderInSession(order: Order) {
    const sessionOrders = sessionStorage.getItem('orderHistory');
    const orderHistory: Order[] = sessionOrders ? JSON.parse(sessionOrders) : [];
    orderHistory.push(order);
    sessionStorage.setItem('orderHistory', JSON.stringify(orderHistory));
  }
}
