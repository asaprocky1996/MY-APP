import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {
    
  weight:number=0;
  height:number=0;
  result:number=0;
  category:string='category'

  bmi(){
    this.result=(this.weight)/(this.height * this.height);
  
    if (this.result < 18.5) {
      this.category = 'Underweight';
    } else if (this.result >= 18.5 && this.result < 25) {
      this.category = 'Normal weight';
    } else if (this.result >= 25 && this.result < 30) {
      this.category = 'Overweight';
    } else {
      this.category = 'Obese';
    }
  }
}
