import { Component } from '@angular/core';
import {type inputEle } from './user/input.type';
import {type resultData } from './user/input.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {
  resultData!:resultData[]; 
  onCalculateInvestmentResults(data:inputEle) {
    const {initialInvestment,duration,expectedReturn,annualInvestment} = data
    const annualData = [];

     
    for (let i = 0; i < duration; i++) {
      
      const year = i + 1;
      const interestEarnedInYear = annualInvestment * (expectedReturn / 100);
      const totalInterest = (annualInvestment * year) * expectedReturn/100 ;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: totalInterest + (annualInvestment * year),
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested:   annualInvestment * year,
      });
    }
    console.log(annualData);
    this.resultData = annualData
  }
}
