// src/app/order.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartItem } from './cart.service';

export interface Order {
  id?: string; //
  items: CartItem[];
  totalCost: number;
  timestamp: string;
}

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = '';

  constructor(private http: HttpClient) {}

  placeOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.apiUrl, order);
  }

  getOrderHistory(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiUrl);
  }
}
