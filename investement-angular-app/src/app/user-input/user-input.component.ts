import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  inital_investement: number = 0;
  annual_investement: number = 0;
  expected_return: number = 0;
  duration: number = 0;

  onSubmit() {
    console.log("inital_investement" + this.inital_investement);
    console.log("annual_investement" + this.annual_investement);
    console.log("expected_return" + this.expected_return);
    console.log("duration" + this.duration)
  }
}
