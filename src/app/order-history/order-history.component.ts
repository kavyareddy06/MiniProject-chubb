import { Component,OnInit } from '@angular/core';
import { CartItem } from '../cart.service';
import { CommonModule } from '@angular/common';
export interface Order {
  items: CartItem[];
  totalCost: number;
  timestamp: string;
}
@Component({
  selector: 'app-order-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-history.component.html',
  styleUrl: './order-history.component.css'
})
export class OrderHistoryComponent implements OnInit {
  orderHistory: Order[] = [];

  ngOnInit() {
    if (typeof window !== 'undefined' && window.sessionStorage) { // Check if sessionStorage is available
      const sessionOrders = sessionStorage.getItem('orderHistory');
      if (sessionOrders) {
        this.orderHistory = JSON.parse(sessionOrders);
      }
    } else {
      console.warn("sessionStorage is not available.");
    }
  }
}