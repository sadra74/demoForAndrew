import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccountBalanceComponent} from './account-balance/account-balance.component';


const routes: Routes = [
  { path: 'account-balance', component: AccountBalanceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
