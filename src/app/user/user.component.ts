import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import {type inputEle } from './input.type';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Output() calculate = new EventEmitter<inputEle>();
  enterInitialValue = ""
  annualInvestment = ""
  expectedReturn = ""
  duration = ""
  onSubmit(){
    this.calculate.emit({
      initialInvestment:+this.enterInitialValue,
      annualInvestment:+this.annualInvestment,
      duration:+this.duration,
      expectedReturn:+this.expectedReturn,
    })
  }

}
