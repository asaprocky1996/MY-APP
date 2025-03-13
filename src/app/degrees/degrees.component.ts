import { Component } from '@angular/core';

@Component({
  selector: 'app-degrees',
  templateUrl: './degrees.component.html',
  styleUrls: ['./degrees.component.css']
})
export class DegreesComponent {

  celsius:number=0;
  fahrenheit:number=0;
  result:number=0;

  C(){
    console.log(this.celsius);
    this.result = (this.celsius * 9/5) + 32;
    console.log(this.result)
  }

  F(){
     console.log(this.fahrenheit);
     this.result=(this.fahrenheit-32)*5/9;
     console.log(this.result);

  }
}
