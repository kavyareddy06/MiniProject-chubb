import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dosa-res',
  standalone: true,
  imports: [NavbarComponent,RouterLink],
  templateUrl: './dosa-res.component.html',
  styleUrl: './dosa-res.component.css'
})
export class DosaResComponent {

}
