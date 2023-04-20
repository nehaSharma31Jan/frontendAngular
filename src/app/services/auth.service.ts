import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environment';
import { User } from '../models/user.model';
import { AuthResponse } from '../models/auth-response.model';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public isAuthenticated(): boolean {
    const token = this.getToken();
    if (!token) {
      return false;
    }
    try {
      const decoded: any = jwt_decode(token);
      return decoded.exp > Date.now() / 1000;
    } catch (e) {
      return false;
    }
  }

  login(email: string, password: string): Observable<AuthResponse> {
    const body = {
      email: email,
      password: password
    };
    return this.http.post<AuthResponse>(`${this.baseUrl}/users/authenticate`, body).pipe(
        tap((response: AuthResponse) => {
            const token = response.token;
            localStorage.setItem('token', token);
      })
    );
  }

  signup(user: User): Observable<any> {
    return this.http.post(`${this.baseUrl}/users/register`, user);
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }

  getToken(): string {
    return localStorage.getItem('token') || '';
  }
  getCurrentUser(): Observable<User | null> {
    return this.http.get<User | null>(`${this.baseUrl}/users/current`);
  }
  getAuthHeaders(): HttpHeaders {
    const token = this.getToken();
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }
}
