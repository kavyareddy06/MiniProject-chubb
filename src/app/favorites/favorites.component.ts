import { Component } from '@angular/core';
import { FavoritesService } from '../favorites.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {
  favorites = this.favoritesService.getFavorites();

  constructor(private favoritesService: FavoritesService) {}

  removeFavorite(item: any) {
    this.favoritesService.removeFavorite(item.name);
    this.favorites = this.favoritesService.getFavorites(); 
  }
}
