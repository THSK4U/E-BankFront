import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule, FormBuilder, Validator, FormControl, Validators, FormsModule} from "@angular/forms";
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule,FormsModule],
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {
 title = 'E-bankFront';

  form = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private authentication: AuthenticationService) {}

  onSubmit(): void {
    if (this.form.valid) {
      const loginObj = this.form.value;
      this.authentication.login(loginObj).subscribe(res =>{
        console.log('Login successful', res);
        localStorage.setItem('authToken', res.token);
        this.authentication.navigateToUser();
      });
    }
  }
}
