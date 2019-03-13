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

  @Input()
  creditCardForm: FormGroup;

  static buildCreaditCard(fb: FormBuilder, creditCard: CreditCardModel): FormGroup {
    return fb.group({
      id: creditCard.id,
      type: [creditCard.type, Validators.required],
      creditCardNumber: [creditCard.creditCardNumber, Validators.required],
      nameOnCard: [creditCard.nameOnCard, Validators.required],
      expirationTime: [creditCard.expirationTime, Validators.required]
    });
  }
  constructor() { }

  ngOnInit() {
  }

  setCardType(type: string) {
    const control = this.creditCardForm.get('type');
    control.patchValue(type);
  }
}
