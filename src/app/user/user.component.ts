import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { type inputEle } from './input.type';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  enterInitialValue ="";
  annualInvestment ="";
  expectedReturn ="";
  duration ="";
  constructor(private investment:InvestmentService){
    
  }
  
  onSubmit() {
    this.investment.onCalculateInvestmentResults({
      initialInvestment: +this.enterInitialValue,
      annualInvestment: +this.annualInvestment,
      duration: +this.duration,
      expectedReturn: +this.expectedReturn,
    });
    this.enterInitialValue = "";
    this.annualInvestment = "";
    this.expectedReturn = "";
    this.duration = "";
  }
}
