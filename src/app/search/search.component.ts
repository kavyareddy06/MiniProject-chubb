import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { SearchService } from '../search.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule,FormsModule,NavbarComponent,RouterLink],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchQuery: string = '';
  suggestions: any[] = []; 
  selectedItem: any | null = null; 

  constructor(private searchService: SearchService) {}

  onSearchChange(): void {
    if (this.searchQuery.trim()) {
      this.searchService.getSuggestions(this.searchQuery).subscribe((data: any[]) => {
        this.suggestions = data;
      });
    } else {
      this.suggestions = [];
    }
  }

  onSelectItem(item: any): void {
    this.selectedItem = item; 
  }

  clearSelection(): void {
    this.selectedItem = null; 
    this.searchQuery = ''; 
    this.suggestions = []; 
  }
}