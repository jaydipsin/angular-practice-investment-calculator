import { Injectable, signal } from "@angular/core";
import { inputEle } from "./user/input.type";
import { resultData } from "./user/input.type";

@Injectable({providedIn:"root"})
export class InvestmentService{
    resultData= signal<resultData[] | undefined>(undefined);
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
        this.resultData.set(annualData);
    }
}