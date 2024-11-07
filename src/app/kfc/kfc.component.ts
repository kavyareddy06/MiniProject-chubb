import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FavoritesService } from '../favorites.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
interface KFCItem {
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  quantity: number;
}

@Component({
  selector: 'app-kfc',
  standalone:true,
  imports:[CommonModule, RouterLink, NavbarComponent],
  templateUrl: './kfc.component.html',
  styleUrls: ['./kfc.component.css']
})
export class KfcComponent {
 kfcItems: KFCItem[] = [
  
    {
      name: 'Korean & Thai Roll Chicken Meal',
      price: 499,
      description: 'Give a perfect start to your day with this mix of fruits and veggies and eggs.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtHkWXmO7icXr9mxxpQPN9aywcSxIbELX9_g&s',
      quantity: 0,
    },
    {
      name: 'Indian Tandoori Roll Chicken Meal',
      price: 325,
      description: 'Give a perfect start to your day with this mix of fruits and veggies and eggs.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGNtlgThG_rYqH6SHE5jB8vbLYzVVwZvlNZg&s',
      quantity: 0,
    },
    {
      name: 'Thai Spicy Roll & Zinger Chicken Meal',
      price: 249,
      description: 'Supple diced chicken wrapped with omelette oozing with cheese served with cut fruits.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMsJba2I0PegcNgRpHjrM4gIwdlw-Sv7SEhQ&s',
      quantity: 0,
    },
  ];

  
  private selectedRestaurant = 'KFC'; 

  constructor(private cartService: CartService, private favoritesService: FavoritesService) {}

  addToCart(item: KFCItem) {
    const currentCartRestaurant = this.cartService.getCartRestaurant();
    
    if (!currentCartRestaurant) {
      this.cartService.setCartRestaurant(this.selectedRestaurant);
    }

    if (this.cartService.getCartRestaurant() === this.selectedRestaurant) {
      if (item.quantity === 0) {
        item.quantity = 1;
        this.cartService.addItem({ name: item.name, price: item.price, imageUrl: item.imageUrl, quantity: 1 }, this.selectedRestaurant);
      } else {
        this.increaseQuantity(item);
      }
    } else {
      alert(`You can only add items from ${this.cartService.getCartRestaurant()} to the cart.`);
    }
  }

  increaseQuantity(item: KFCItem) {
    item.quantity += 1;
    this.cartService.updateItemQuantity(item.name, item.quantity);
  }

  decreaseQuantity(item: KFCItem) {
    if (item.quantity > 0) {
      item.quantity -= 1;
      this.cartService.updateItemQuantity(item.name, item.quantity);
    }
    if (item.quantity === 0) {
      this.cartService.removeItem(item.name); 
    }
  }

  toggleFavorite(item: KFCItem) {
    if (this.isFavorite(item)) {
      this.favoritesService.removeFavorite(item.name);
    } else {
      this.favoritesService.addFavorite(item);
    }
  }

  isFavorite(item: KFCItem): boolean {
    return this.favoritesService.isFavorite(item.name);
  }
}
