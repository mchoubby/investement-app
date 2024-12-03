import { Injectable } from '@angular/core';
import { AnnualData } from '../models/annualdata-result.model';

@Injectable({
  providedIn: 'root'
})
export class InvestmentCalculatorService {
  private annualData: Array<AnnualData> = []; 
  constructor() { }
  
  calculateInvestment(initial_investment: number, annual_investment: number, expected_return: number, duration: number) {
    this.annualData = [];
    let investmentValue = initial_investment;
    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expected_return / 100);
      investmentValue += interestEarnedInYear + annual_investment;
      const totalInterest =
        investmentValue - annual_investment * year - initial_investment;
      this.annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annual_investment,
        totalInterest: totalInterest,
        totalAmountInvested: initial_investment + annual_investment * year,
      });
    }
  }

  get AnnualDatas(): AnnualData[] {
    return this.annualData;
  }
}
