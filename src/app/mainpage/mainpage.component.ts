import { Component ,ChangeDetectorRef, OnInit} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule,HttpClientModule,RouterLink],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent {
  email: string = '';
  password: string = '';
  username: string = '';
  isSidebarOpen = false;
  showDropdown = false;
  isSignup = false;
  errorMessage = '';

  constructor(
    private cdr: ChangeDetectorRef,
    public cartService: CartService,
    public authService: AuthService
  ) {}

  openSignInSidebar() {
    this.isSidebarOpen = true;
    this.isSignup = false;
    this.errorMessage = '';
  }

  openSignUpSidebar() {
    this.isSidebarOpen = true;
    this.isSignup = true;
    this.errorMessage = '';
  }

  closeSidebar() {
    this.isSidebarOpen = false;
    this.email = '';
    this.password = '';
    this.username = '';
    this.errorMessage = '';
  }

  async signIn() {
    try {
      const success = await this.authService.signin(this.email, this.password);
      if (success) {
        this.closeSidebar();
      } else {
        this.errorMessage = 'Invalid email or password';
      }
    } catch (error) {
      this.errorMessage = 'An error occurred during sign in';
      console.error('Sign in error:', error);
    }
  }

  async signUp() {
    if (!this.username || !this.email || !this.password) {
      this.errorMessage = 'Please fill in all fields';
      return;
    }

    try {
      const success = await this.authService.signup(this.username, this.email, this.password);
      if (success) {
        
        await this.authService.signin(this.email, this.password);
        this.closeSidebar();
      } else {
        this.errorMessage = 'Signup failed. Please try again.';
      }
    } catch (error) {
      this.errorMessage = 'An error occurred during sign up';
      console.error('Sign up error:', error);
    }
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  signOut() {
    this.authService.signout();
    this.showDropdown = false;
  }
}