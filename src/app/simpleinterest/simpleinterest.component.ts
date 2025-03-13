import { Component } from '@angular/core';

@Component({
  selector: 'app-simpleinterest',
  templateUrl: './simpleinterest.component.html',
  styleUrls: ['./simpleinterest.component.css']
})
export class SimpleinterestComponent {

  principle:number=0;
  rate:number=0;
  tenure:number=0;
  result:number=0;

  SI(){
    console.log(this.principle,this.rate,this.tenure);
    this.result=this.principle*this.rate*this.tenure/100;
    console.log(this.result)

  }

}
