import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FavoritesService } from '../favorites.service';
import { NavbarComponent } from '../navbar/navbar.component';
interface idli2Item {
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  quantity: number; // Track if item was just added
}

@Component({
  selector: 'app-idli2',
  standalone: true,
  imports: [CommonModule,RouterLink,NavbarComponent],
  templateUrl: './idli2.component.html',
  styleUrl: './idli2.component.css'
})
export class Idli2Component {

  idliItems: idli2Item[] = [
    {
      name: 'Plain Idli [3 Pc]',
      price: 99,
      description: 'A delecatable and savory dosa topped with flavourful masala allu, served with peanut chutney& sambar.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNRLK1tvI4JQnQkwjWah4UEjmvUw8g5FhZPg&s',
      quantity: 0,
    },
    {
      name: 'Ragi Idli [3 Pc]',
      price: 115,
      description: 'Give a perfect start to your day with this mix of fruits and veggies and eggs.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7YexP-J90SaPY-Q1hEP5kDN-7IUhYdWJUeg&s',
      quantity: 0,
    },
    {
      name: 'Ghee Podi Thatte Idli [1 Pc]',
      price: 99,
      description: 'Supple diced chicken wrapped with omelette oozing with cheese served with cut fruits.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsbsEuU6FuxcbCHuVM2VMHFAYxCU44fETScw&s',
      quantity: 0,
    },
  ];


   private selectedRestaurant = 'Millet Express'; 

   constructor(private cartService: CartService, private favoritesService: FavoritesService) {}
 
   addToCart(item: idli2Item) {
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
 
   increaseQuantity(item: idli2Item) {
     item.quantity += 1;
     this.cartService.updateItemQuantity(item.name, item.quantity);
   }
 
   decreaseQuantity(item: idli2Item) {
     if (item.quantity > 0) {
       item.quantity -= 1;
       this.cartService.updateItemQuantity(item.name, item.quantity);
     }
     if (item.quantity === 0) {
       this.cartService.removeItem(item.name); 
     }
   }
 
   toggleFavorite(item: idli2Item) {
     if (this.isFavorite(item)) {
       this.favoritesService.removeFavorite(item.name);
     } else {
       this.favoritesService.addFavorite(item);
     }
   }
 
   isFavorite(item: idli2Item): boolean {
     return this.favoritesService.isFavorite(item.name);
   }
 }
 