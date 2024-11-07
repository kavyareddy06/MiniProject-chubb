import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

export interface User {
  id: string;
  username: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  loadUserFromLocalStorage() {
    if (this.isBrowser) {
      const storedUser = localStorage.getItem('currentUser');
      if (storedUser) {
        this.currentUserSubject.next(JSON.parse(storedUser));
      }
    }
  }

  private setLocalStorageItem(key: string, value: string): void {
    if (this.isBrowser) {
      localStorage.setItem(key, value);
    }
  }

  private removeLocalStorageItem(key: string): void {
    if (this.isBrowser) {
      localStorage.removeItem(key);
    }
  }

  async signup(username: string, email: string, password: string): Promise<boolean> {
    try {
      const response = await fetch('https://67271ec6302d03037e6f76c2.mockapi.io/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
      });

      if (!response.ok) throw new Error('Signup failed');

      return true;
    } catch (error) {
      console.error('Signup error:', error);
      return false;
    }
  }

  async signin(email: string, password: string): Promise<boolean> {
    try {
      const response = await fetch('https://67271ec6302d03037e6f76c2.mockapi.io/users');
      const users = await response.json();
      const user = users.find((u: any) => u.email === email && u.password === password);

      if (user) {
        const userData: User = {
          id: user.id,
          username: user.username,
          email: user.email
        };
        
        this.setLocalStorageItem('currentUser', JSON.stringify(userData));
        this.currentUserSubject.next(userData);
        return true;
      }

      return false;
    } catch (error) {
      console.error('Signin error:', error);
      return false;
    }
  }

  signout(): void {
    this.removeLocalStorageItem('currentUser');
    this.currentUserSubject.next(null);
  }

  isAuthenticated(): boolean {
    return this.currentUserSubject.value !== null;
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }
}
