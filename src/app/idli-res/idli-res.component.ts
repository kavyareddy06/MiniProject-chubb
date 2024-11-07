import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-idli-res',
  standalone: true,
  imports: [CommonModule,RouterLink,NavbarComponent],
  templateUrl: './idli-res.component.html',
  styleUrl: './idli-res.component.css'
})
export class IdliResComponent {

}
