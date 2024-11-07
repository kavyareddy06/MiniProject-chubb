import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export interface CartItem {
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: CartItem[] = [];
  private cartRestaurant: string | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.loadCartFromStorage();
    this.loadCartRestaurantFromStorage();
  }

  private saveCartToStorage() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('cartItems', JSON.stringify(this.items));
      if (this.cartRestaurant) {
        localStorage.setItem('cartRestaurant', JSON.stringify(this.cartRestaurant));
      } else {
        this.removeCartRestaurantFromStorage();
      }
    }
  }

  private loadCartFromStorage() {
    if (isPlatformBrowser(this.platformId)) {
      const storedItems = localStorage.getItem('cartItems');
      if (storedItems) {
        this.items = JSON.parse(storedItems);
      }
    }
  }

  private loadCartRestaurantFromStorage() {
    if (isPlatformBrowser(this.platformId)) {
      const storedRestaurant = localStorage.getItem('cartRestaurant');
      this.cartRestaurant = storedRestaurant ? JSON.parse(storedRestaurant) : null;
    }
  }

  private removeCartRestaurantFromStorage() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('cartRestaurant');
    }
    this.cartRestaurant = null; // Also reset in memory
  }

  addItem(item: CartItem, restaurant: string) {
    if (this.items.length === 0) {
     
      this.cartRestaurant = restaurant;
    } else if (this.cartRestaurant && this.cartRestaurant !== restaurant) {
      alert(`You can only add items from ${this.cartRestaurant} to the cart.`);
      return;
    }

    const existingItem = this.items.find(i => i.name === item.name);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.items.push(item);
    }
    this.saveCartToStorage();
  }

  updateItemQuantity(name: string, quantity: number) {
    const item = this.items.find(i => i.name === name);
    if (item) {
      item.quantity = quantity;
      this.saveCartToStorage();
    }
  }

  removeItem(name: string) {
    this.items = this.items.filter(i => i.name !== name);
    if (this.items.length === 0) {
      this.removeCartRestaurantFromStorage(); 
    }
    this.saveCartToStorage();
  }

  getItems(): CartItem[] {
    return this.items;
  }

  getTotalPrice() {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  clearCart() {
    this.items = [];
    this.removeCartRestaurantFromStorage(); 
    this.saveCartToStorage();
  }

  getCartRestaurant(): string | null {
    return this.cartRestaurant;
  }

  setCartRestaurant(restaurant: string | null) {
    this.cartRestaurant = restaurant;
    this.saveCartToStorage();
  }
}
