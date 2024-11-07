import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private items = [
    { id: '1', title: 'Biryani', subtitle: 'Dish', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC52b9Onr-ZXTzDWML7oLJjp1E_y5kuRPkfg&s' },
    { id: '2', title: 'Pizza', subtitle: 'Dish', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqywmEY1BhYulBZue_HgCNIODy1tPZsh4ChQ&s' },
    { id: '3', title: 'Burger', subtitle: 'Dish', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREj4DxOqKpRE6xq3SjofilczXo-B63oGzg6w&s' },
    { id: '4', title: 'Paneer Biryani', subtitle: 'Dish', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvKuoJWhBiQeFzGiII94fWDRrhwVaOqJL0oQ&s' },
    { id: '5', title: 'Birthday Cake', subtitle: 'Dish', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL3fWrmtVPdPCcFlldqJi1Nfi1Qo2LZIYmBQ&s' },
    { id: '6', title: 'Shawarma', subtitle: 'Restaurant', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0zflQ2i-TJzp1uHlVOuxyjQw4zSfRV4UrOw&s' },
    {id: '7', title: 'Dosa', subtitle: 'Dish', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK1ydWG6iGOpjcJUjkj6eFsyI6SdtHHwMQnQ&s' },
    {id: '8', title: 'Chinese', subtitle: 'Restaurant', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3n81Wd9-762Q8NFCWi8sF79BLuLrY_pIToQ&s' },
    {id: '9', title: 'KFC', subtitle: 'Restaurant', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0zflQ2i-TJzp1uHlVOuxyjQw4zSfRV4UrOw&s' }
  ];

  constructor() {}

  getSuggestions(query: string): Observable<any[]> {
    const lowerQuery = query.toLowerCase();
    const filteredItems = this.items.filter(item =>
      item.title.toLowerCase().includes(lowerQuery)
    );
    return of(filteredItems);
  }
}
