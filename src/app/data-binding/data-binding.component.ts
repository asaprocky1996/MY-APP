import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  //--Two way data binding--//

  mobile:string='+91';


  //property binding//

  isData:boolean=true;

  //---Event Binding--//

  click(){
    alert('HELLO');
  }

  submit(){
    alert('HI')
  }

  check(){
    alert(this.mobile);
  }

  //Interpolation//
  age:number=21;
  name:string='21Savage'



num1:number=0;
num2:number=0;
result:number=0;

add(){
  console.log(this.num1,this.num2);
  this.result=this.num1+this.num2;
  console.log(this.result);
}

}