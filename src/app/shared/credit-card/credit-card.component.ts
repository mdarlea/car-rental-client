import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CreditCardModel } from '../models/credit-card.model';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {
  showDateOnly = true;

  get selectedCardTime() {
    return (this.creditCardForm) ? this.getCardType(this.creditCardForm.get('type').value) : null;
  }

  @Input()
  creditCardForm: FormGroup;

  @Input()
  submitted: boolean;

  get f() { return this.creditCardForm.controls; }

  static buildCreaditCard(fb: FormBuilder, creditCard: CreditCardModel): FormGroup {
    const group = fb.group({
      id: creditCard.id,
      type: [creditCard.type, Validators.required],
      creditCardNumber: [creditCard.creditCardNumber, Validators.required],
      nameOnCard: [creditCard.nameOnCard, Validators.required],
      expirationTime: [null, Validators.required]
    });
    if (creditCard.expirationTime) {
      const date = new Date(creditCard.expirationTime);

      // set the date
      const control = group.get('expirationTime');
      control.setValue({year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate()});
    }
    return group;
  }
  constructor() { }

  ngOnInit() {
  }

  setCardType(event: Event, type: string) {
    event.preventDefault();
    const control = this.creditCardForm.get('type');
    control.patchValue(type);
  }

  preventDefault(event: Event) {
    event.preventDefault();
  }

  private getCardType(type: string) {
    if (type === 'VISA') {
      return 'VISA';
    }
    if (type === 'MasterCard') {
      return 'Master Card';
    }
    if (type === 'AmericanExpress') {
      return 'American Express';
    }
  }
}
