import { Component, inject } from '@angular/core';
import { InvestmentCalculatorService } from './investment-calculator.service';
import { AnnualData } from '../models/AnnualData';
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [UserInputComponent, InvestmentResultsComponent],
})
export class AppComponent {

  annualData: AnnualData[] = [];
  private investmentCalculator = inject(InvestmentCalculatorService);
  calculateData() {
    this.annualData = this.investmentCalculator.getAnnualDatas();
  }
}
