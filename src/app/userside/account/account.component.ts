import { Component, OnInit } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { AccountService } from '../../services/account.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  accounts: any[] = [];
  selectedUser: any;
  token: string | null;

  constructor(private accountService: AccountService, private authService: AuthenticationService) {
    this.token = this.authService.getToken();
  }

  ngOnInit(): void {
    if (this.token) {
      const username = this.getUsernameFromToken(this.token);
      this.fetchAccountsByUsername(username);
    } else {
      console.error('Token is not available');
    }
  }

  getUsernameFromToken(token: string): string {
    const decoded: any = jwtDecode(token);
    return decoded.username;
  }

  fetchAccountsByUsername(username: string): void {
    this.accountService.getAccountsByUsername(username).subscribe(data => {
      this.accounts = data;
        this.selectedUser = this.accounts[0].user;
    },
      );
  }
}
