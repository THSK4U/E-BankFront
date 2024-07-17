import { Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import {USERSIDEComponent} from "./userside/userside.component";
import {HomeComponent} from "./home/home.component";


export const routes: Routes = [
  { path: 'login', component: AuthenticationComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
