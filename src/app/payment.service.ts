import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CreditCardPayment} from './account-balance/credit-card-payment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(public http: HttpClient) {
  }

  sendRequest(formData: CreditCardPayment): Observable<any> {
    const headers = { Authorization: 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    return this.http.post('https://jsonplaceholder.typicode.com/posts', formData, {headers});
  }
}
