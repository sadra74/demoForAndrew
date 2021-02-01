import { Injectable } from '@angular/core';
import {CreditCardPayment} from './account-balance/credit-card-payment';
import {observable} from 'mobx-angular';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  @observable ccp = new CreditCardPayment();
  constructor() { }
}
