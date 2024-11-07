import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FavoritesService } from '../favorites.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
interface PizzaItem {
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  quantity: number;
}

@Component({
  selector: 'app-pizza',
  standalone:true,
  imports:[CommonModule, RouterLink, NavbarComponent],
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent {
 pizzaItems: PizzaItem[] = [
  
    {
      name: 'Peppy Paneer Cheese Burst',
      price: 215,
      description: 'Give a perfect start to your day with this mix of fruits and veggies and eggs.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVJiMGt-SI69kdqasJ_evpDrAnV_NmCvgkMw&s',
      quantity: 0,
    },
    {
      name: 'Farmhouse Cheese Burst',
      price: 225,
      description: 'Give a perfect start to your day with this mix of fruits and veggies and eggs.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7YNVwJV-2IIK2-ZMOrNnfA0BU33gVgNX-bQ&s',
      quantity: 0,
    },
    {
      name: 'Spiced Double Chicken Pizza',
      price: 249,
      description: 'Supple diced chicken wrapped with omelette oozing with cheese served with cut fruits.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9nl53AlVh9rEOPVJuC_QKXA950dW52G-eIQ&s',
      quantity: 0,
    },
  ];

  private selectedRestaurant = 'Pizza Hut'; 

  constructor(private cartService: CartService, private favoritesService: FavoritesService) {}

  addToCart(item: PizzaItem) {
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

  increaseQuantity(item: PizzaItem) {
    item.quantity += 1;
    this.cartService.updateItemQuantity(item.name, item.quantity);
  }

  decreaseQuantity(item: PizzaItem) {
    if (item.quantity > 0) {
      item.quantity -= 1;
      this.cartService.updateItemQuantity(item.name, item.quantity);
    }
    if (item.quantity === 0) {
      this.cartService.removeItem(item.name); 
    }
  }

  toggleFavorite(item: PizzaItem) {
    if (this.isFavorite(item)) {
      this.favoritesService.removeFavorite(item.name);
    } else {
      this.favoritesService.addFavorite(item);
    }
  }

  isFavorite(item: PizzaItem): boolean {
    return this.favoritesService.isFavorite(item.name);
  }
}
