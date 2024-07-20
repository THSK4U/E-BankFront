import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { USERSIDEComponent } from './userside/userside.component';
import { AuthGuard } from './services/AuthGuard';
import { TransferComponent } from './userside/transfer/transfer.component';
import { AccountComponent } from './userside/account/account.component';
import {AjouterAccountComponent} from "./userside/account/ajouter-account/ajouter-account.component";

const routes: Routes = [
  { path: 'login', component: AuthenticationComponent },
  { path: '', component: HomeComponent},
  {
    path: 'home',
    component: USERSIDEComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'account', pathMatch: 'full' },
      { path: 'transfer', component: TransferComponent },
      { path: 'account', component: AccountComponent },
      { path: 'créercompte', component: AjouterAccountComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
