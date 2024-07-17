import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {
 title = 'E-bankFront';

}
