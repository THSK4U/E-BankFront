import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private apiUrl = 'http://localhost:8088/api/account'; // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  getAccountsByUsername(username: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/username/${username}`);
  }
  submitAccountData(accountData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, accountData);
  }

}
