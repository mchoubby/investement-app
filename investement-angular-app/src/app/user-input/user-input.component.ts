import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentCalculatorService } from '../investment-calculator.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initial_investment: number = 0;
  annual_investment: number = 0;
  expected_return: number = 0;
  duration: number = 0;

  @Output() calculate = new EventEmitter<void>();

  private investmentCalculator = inject(InvestmentCalculatorService);

  onsubmit() {
    console.log(`initial-investment: ${this.initial_investment}`);
    console.log(` annual-investment: ${this. annual_investment}`);
    console.log(`expected-return: ${this.expected_return}`);
    console.log(`duration: ${this.duration}`);
    this.investmentCalculator.calculateInvestment(this.initial_investment, this. annual_investment, this.expected_return, this.duration);
    this.calculate.emit();
  }
}
