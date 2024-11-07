import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FavoritesService } from '../favorites.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Chinese2Item {
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  quantity: number;
}

@Component({
  selector: 'app-chinese2',
  standalone: true,
  imports: [RouterLink, NavbarComponent, CommonModule],
  templateUrl: './chinese2.component.html',
  styleUrl: './chinese2.component.css'
})
export class Chinese2Component {
  chineseItems: Chinese2Item[] = [
    {
      name: 'Combo for 1 Non-Veg',
      price: 379,
      description: 'Give a perfect start to your day with this mix of fruits and veggies and eggs.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3n81Wd9-762Q8NFCWi8sF79BLuLrY_pIToQ&s',
      quantity: 0,
    },
    {
      name: 'Combo for 1 Veg',
      price: 225,
      description: 'Give a perfect start to your day with this mix of fruits and veggies and eggs.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY7Hgjy8Brp9nnk321QTqgdSUDR3mbqaZJ9w&s',
      quantity: 0,
    },
    {
      name: 'Hunan Paneer Dry',
      price: 249,
      description: 'Supple diced chicken wrapped with omelette oozing with cheese served with cut fruits.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5MULGDfOzTLiwLKpVUu3VEC3rArMjd6TJnQ&s',
      quantity: 0,
    },
  ];

  private selectedRestaurant = 'Tipsy Topsy Bakers';

  constructor(private cartService: CartService, private favoritesService: FavoritesService) {}

  addToCart(item: Chinese2Item) {
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

  increaseQuantity(item: Chinese2Item) {
    item.quantity += 1;
    this.cartService.updateItemQuantity(item.name, item.quantity);
  }

  decreaseQuantity(item: Chinese2Item) {
    if (item.quantity > 0) {
      item.quantity -= 1;
      this.cartService.updateItemQuantity(item.name, item.quantity);
    }
    if (item.quantity === 0) {
      this.cartService.removeItem(item.name);
    }
  }

  toggleFavorite(item: Chinese2Item) {
    if (this.isFavorite(item)) {
      this.favoritesService.removeFavorite(item.name);
    } else {
      this.favoritesService.addFavorite(item);
    }
  }

  isFavorite(item: Chinese2Item): boolean {
    return this.favoritesService.isFavorite(item.name);
  }
}
