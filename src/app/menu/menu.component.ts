import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FavoritesService } from '../favorites.service';
import { NavbarComponent } from '../navbar/navbar.component';

interface MenuItem {
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  quantity: number; 
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
 

  menuItems: MenuItem[] = [
    {
      name: '100n Breakfast Boiled Eggs',
      price: 215,
      description: 'Give a perfect start to your day with this mix of fruits and veggies and eggs.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOsaj1Y2XaCPhyaMlYNQRz3o2wC6arVexuWA&s',
      quantity: 0,
    },
    {
      name: '100n Breakfast Omelette',
      price: 225,
      description: 'Give a perfect start to your day with this mix of fruits and veggies and eggs.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjpczlY7dTqHpbpV4V8NXYLNFpL19LrYW_8g&s',
      quantity: 0,
    },
    {
      name: 'Chicken Cheese Omelette And Cut Fruits',
      price: 249,
      description: 'Supple diced chicken wrapped with omelette oozing with cheese served with cut fruits.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2aw7R9mzQUoKnfAz5A0E-9emooY-9kxH9Kg&s',
      quantity: 0,
    },
  ];

  private selectedRestaurant = '100N'; 

  constructor(private cartService: CartService, private favoritesService: FavoritesService) {}

  addToCart(item: MenuItem) {
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

  increaseQuantity(item: MenuItem) {
    item.quantity += 1;
    this.cartService.updateItemQuantity(item.name, item.quantity);
  }

  decreaseQuantity(item: MenuItem) {
    if (item.quantity > 0) {
      item.quantity -= 1;
      this.cartService.updateItemQuantity(item.name, item.quantity);
    }
    if (item.quantity === 0) {
      this.cartService.removeItem(item.name);
    }
  }

  toggleFavorite(item: MenuItem) {
    if (this.isFavorite(item)) {
      this.favoritesService.removeFavorite(item.name);
    } else {
      this.favoritesService.addFavorite(item);
    }
  }

  isFavorite(item: MenuItem): boolean {
    return this.favoritesService.isFavorite(item.name);
  }
}
