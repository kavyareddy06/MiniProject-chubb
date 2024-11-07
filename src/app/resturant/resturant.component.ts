import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-resturant',
  standalone: true,
  imports: [NavbarComponent,RouterLink],
  templateUrl: './resturant.component.html',
  styleUrl: './resturant.component.css'
})
export class ResturantComponent {

}
