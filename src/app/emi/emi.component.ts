import { Component } from '@angular/core';

@Component({
  selector: 'app-emi',
  templateUrl: './emi.component.html',
  styleUrls: ['./emi.component.css']
})
export class EmiComponent {

  principle:number=0;
  rate:number=0;
  period:number=0;
  result:number=0;

 emi(){
  console.log(this.principle,this.rate,this.period);
  this.result=(this.principle)*(this.rate)*((1+this.rate)**this.period)/(((1+this.rate)**this.period)-1)
  console.log(this.result)
 }
}
