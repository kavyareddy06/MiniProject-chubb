import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FavoritesService } from '../favorites.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
interface BurgerItem {
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  quantity: number;
}

@Component({
  selector: 'app-burger',
  standalone:true,
  imports:[CommonModule, RouterLink, NavbarComponent],
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent {
burgerItems: BurgerItem[] = [
   
    {
      name: '(Flame & Grill) Tandoori Chicken Burger Regular',
      price: 215,
      description: 'Give a perfect start to your day with this mix of fruits and veggies and eggs.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZuHTiGWB-2IMLv4VAejR5Ts6KZI59xcNmMQ&s',
      quantity: 0,
    },
    {
      name: '4pc Peri Peri Wings',
      price: 170,
      description: 'Give a perfect start to your day with this mix of fruits and veggies and eggs.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9MLDoZ9xVm0OPmZjXN7OwGqlfWOdw_nntaw&s',
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
  private selectedRestaurant = 'Burger King';

  constructor(private cartService: CartService, private favoritesService: FavoritesService) {}

  addToCart(item: BurgerItem) {
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

  increaseQuantity(item: BurgerItem) {
    item.quantity += 1;
    this.cartService.updateItemQuantity(item.name, item.quantity);
  }

  decreaseQuantity(item: BurgerItem) {
    if (item.quantity > 0) {
      item.quantity -= 1;
      this.cartService.updateItemQuantity(item.name, item.quantity);
    }
    if (item.quantity === 0) {
      this.cartService.removeItem(item.name); 
    }
  }

  toggleFavorite(item: BurgerItem) {
    if (this.isFavorite(item)) {
      this.favoritesService.removeFavorite(item.name);
    } else {
      this.favoritesService.addFavorite(item);
    }
  }

  isFavorite(item: BurgerItem): boolean {
    return this.favoritesService.isFavorite(item.name);
  }
}
