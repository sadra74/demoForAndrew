import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PaymentService} from '../payment.service';
import {CreditCardPayment} from './credit-card-payment';
import {StateService} from '../state.service';

@Component({
  selector: 'app-account-balance',
  templateUrl: './account-balance.component.html',
  styleUrls: ['./account-balance.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountBalanceComponent implements OnInit {


  formGroup: FormGroup;



  constructor(private formBuilder: FormBuilder, private service: PaymentService, public state: StateService) {

  }

  submit(): void {
    if (!this.formGroup.valid) {
      return;
    }
    this.service.sendRequest({
      creditCardNumber: this.state.ccp.creditCardNumber,
      cardHolder: this.state.ccp.cardHolder,
      expirationDate: this.state.ccp.expirationDate,
      securityCode: this.state.ccp.securityCode,
      amount: this.state.ccp.amount
    } as CreditCardPayment).subscribe(res => {
      alert('your data has been inserted');
    });
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      creditCardNumber: [null, [Validators.required]],
      cardHolder: [null, Validators.required],
      expirationDate: [null, this.dateValidator],
      securityCode: [null, this.securityCodeValidator],
      amount: [null, Validators.required]
    });
  }

  dateValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value !== null && (new Date(control.value) > new Date())) {
      return {dateValidator: true};
    }
    return null;
  }

  securityCodeValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value !== null && (control.value.length !== 3)) {
      return {securityCodeValidator: true};
    }
    return null;
  }


}
