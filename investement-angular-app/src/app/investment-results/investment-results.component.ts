import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentCalculatorService } from '../investment-calculator.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {

  private investmentService = inject(InvestmentCalculatorService);

  get results() {
    return this.investmentService.AnnualDatas;
  }
}
