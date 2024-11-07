import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FavoritesService } from '../favorites.service';
import { NavbarComponent } from '../navbar/navbar.component';
interface dosa3Item {
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  quantity: number; // Track if item was just added
}
@Component({
  selector: 'app-dosa3',
  standalone: true,
  imports: [RouterLink,CommonModule,NavbarComponent],
  templateUrl: './dosa3.component.html',
  styleUrl: './dosa3.component.css'
})
export class Dosa3Component {

  dosaItems: dosa3Item[] = [
    {
      name: 'Masala Dosa [1 Pc]',
      price: 99,
      description: 'A delecatable and savory dosa topped with flavourful masala allu, served with peanut chutney& sambar.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThT1INT9NGWWW4DfpQxF9ZeFI8X5xLZlL4OA&s',
      quantity: 0,
    },
    {
      name: 'Egg Dosa [1 Pc]',
      price: 115,
      description: 'Give a perfect start to your day with this mix of fruits and veggies and eggs.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK1ydWG6iGOpjcJUjkj6eFsyI6SdtHHwMQnQ&s',
      quantity: 0,
    },
    {
      name: 'Dosa With Chicken Curry',
      price: 299,
      description: 'Supple diced chicken wrapped with omelette oozing with cheese served with cut fruits.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVadxBngf5Ju0TF00MdcwE0TJ-K_vwyY8DUQ&s',
      quantity: 0,
    },
  ];

   private selectedRestaurant = 'Millet Express';

   constructor(private cartService: CartService, private favoritesService: FavoritesService) {}
 
   addToCart(item: dosa3Item) {
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
 
   increaseQuantity(item: dosa3Item) {
     item.quantity += 1;
     this.cartService.updateItemQuantity(item.name, item.quantity);
   }
 
   decreaseQuantity(item: dosa3Item) {
     if (item.quantity > 0) {
       item.quantity -= 1;
       this.cartService.updateItemQuantity(item.name, item.quantity);
     }
     if (item.quantity === 0) {
       this.cartService.removeItem(item.name);
     }
   }
 
   toggleFavorite(item: dosa3Item) {
     if (this.isFavorite(item)) {
       this.favoritesService.removeFavorite(item.name);
     } else {
       this.favoritesService.addFavorite(item);
     }
   }
 
   isFavorite(item: dosa3Item): boolean {
     return this.favoritesService.isFavorite(item.name);
   }
 }
 
