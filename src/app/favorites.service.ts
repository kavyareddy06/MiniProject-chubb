// favorites.service.ts
import { Injectable } from '@angular/core';

interface FavoriteItem {
  name: string;
  price: number;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favorites: FavoriteItem[] = [];

  constructor() {
    if (this.isBrowser()) {
      this.loadFavoritesFromStorage();
    }
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  private saveFavoritesToStorage() {
    if (this.isBrowser()) {
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
    }
  }

  private loadFavoritesFromStorage() {
    if (this.isBrowser()) {
      const storedFavorites = localStorage.getItem('favorites');
      if (storedFavorites) {
        this.favorites = JSON.parse(storedFavorites);
      }
    }
  }

  addFavorite(item: FavoriteItem) {
    if (!this.isFavorite(item.name)) {
      this.favorites.push(item);
      this.saveFavoritesToStorage();
    }
  }

  removeFavorite(name: string) {
    this.favorites = this.favorites.filter(fav => fav.name !== name);
    this.saveFavoritesToStorage();
  }

  isFavorite(name: string): boolean {
    return this.favorites.some(fav => fav.name === name);
  }

  getFavorites() {
    return this.favorites;
  }

  clearFavorites() {
    this.favorites = [];
    this.saveFavoritesToStorage();
  }
}
