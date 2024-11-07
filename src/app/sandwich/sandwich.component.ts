import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-sandwich',
  standalone: true,
  imports: [NavbarComponent,MenuComponent],
  templateUrl: './sandwich.component.html',
  styleUrl: './sandwich.component.css'
})
export class SandwichComponent {

}
