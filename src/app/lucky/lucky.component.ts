import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FavoritesService } from '../favorites.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
interface LuckyItem {
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  quantity: number;
}

@Component({
  selector: 'app-lucky',
  standalone:true,
  imports:[CommonModule, RouterLink, NavbarComponent],
  templateUrl: './lucky.component.html',
  styleUrls: ['./lucky.component.css']
})
export class LuckyComponent {
 luckyItems: LuckyItem[] = [
    // Your menu items here
    {
      name: 'Zafrani Chicken Biryani',
      price: 415,
      description: 'Give a perfect start to your day with this mix of fruits and veggies and eggs.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqtDs3I4KZhD3KvJAowv0DMmYr6xigSphjAA&s',
      quantity: 0,
    },
    {
      name: 'Zafrani Kheema Biryani (Half)',
      price: 525,
      description: 'Give a perfect start to your day with this mix of fruits and veggies and eggs.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyEW9URmy8EgCFgywUwIC57fAzn0UKff8FTg&s',
      quantity: 0,
    },
    {
      name: 'Zafrani Mutton Biryani (Full) 8PC',
      price: 749,
      description: 'Supple diced chicken wrapped with omelette oozing with cheese served with cut fruits.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbXgfbcYmzx2Hjs_B44qMQrJA-H_AbjFlX-A&s',
      quantity: 0,
    },
  ];

  // Define the restaurant name specific to this component
  private selectedRestaurant = 'Lucky Resturant'; // Or any restaurant name that matches this menu

  constructor(private cartService: CartService, private favoritesService: FavoritesService) {}

  addToCart(item: LuckyItem) {
    const currentCartRestaurant = this.cartService.getCartRestaurant();
    
    // If cart is empty, set the cartRestaurant to the selected restaurant
    if (!currentCartRestaurant) {
      this.cartService.setCartRestaurant(this.selectedRestaurant);
    }

    // Ensure items can only be added from the set restaurant
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

  increaseQuantity(item: LuckyItem) {
    item.quantity += 1;
    this.cartService.updateItemQuantity(item.name, item.quantity);
  }

  decreaseQuantity(item: LuckyItem) {
    if (item.quantity > 0) {
      item.quantity -= 1;
      this.cartService.updateItemQuantity(item.name, item.quantity);
    }
    if (item.quantity === 0) {
      this.cartService.removeItem(item.name); // Remove item if quantity is 0
    }
  }

  toggleFavorite(item: LuckyItem) {
    if (this.isFavorite(item)) {
      this.favoritesService.removeFavorite(item.name);
    } else {
      this.favoritesService.addFavorite(item);
    }
  }

  isFavorite(item: LuckyItem): boolean {
    return this.favoritesService.isFavorite(item.name);
  }
}
