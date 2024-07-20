import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../../../services/account.service';

@Component({
  selector: 'app-ajouter-account',
  templateUrl: './ajouter-account.component.html',
  styleUrls: ['./ajouter-account.component.css']
})
export class AjouterAccountComponent {
  accountForm: FormGroup;

  constructor(private fb: FormBuilder, private accountService: AccountService) {
    this.accountForm = this.fb.group({
      accountType: ['', Validators.required],
      balance: ['', [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit() {
    const username = this.getUserIdFromToken();
    console.log("user :" + username);
    this.accountService.getAccountsByUsername(username).subscribe(
      userId => {
        const accountData = {
          ...this.accountForm.value,
          user: {
            userId: userId
          }
        };
        this.accountService.submitAccountData(accountData).subscribe(
          response => {
            console.log('Success:', response);
          },
          error => {
            console.error('Error:', error);
          }
        );
      },
    );
  }

  getUserIdFromToken(): string {
    const token = localStorage.getItem('authToken');
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      console.log(payload);
      return payload.sub;
    }
    return '';
  }
}
