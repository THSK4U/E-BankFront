import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = 'http://localhost:8088/api';

  constructor(private http: HttpClient,private router: Router) {}

  login(obj: any): Observable<any> {
    console.log(obj)
    return this.http.post('http://localhost:8088/login', obj);
  }

  navigateToUser(): void {
    this.router.navigate(['home']);
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  getAuthHeaders(): HttpHeaders {
    const token = this.getToken();
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  getAccountInfo(): Observable<any> {
    return this.http.get(`${this.apiUrl}/account`, { headers: this.getAuthHeaders() });
  }
}
