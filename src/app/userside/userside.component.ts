import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from "@angular/router";
import { TransferComponent } from "./transfer/transfer.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-userside',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive,TransferComponent],
  templateUrl: './userside.component.html',
  styleUrls: ['./userside.component.css']
})

export class USERSIDEComponent {
  constructor(private Routes: Router) {}

  protected readonly encodeURI = encodeURI;

  transferpage(){
    this.Routes.navigate(['transfer']);
  }
  logout(){
    this.Routes.navigate([this.encodeURI('login')]);
    localStorage.removeItem('authToken');
  }
}
