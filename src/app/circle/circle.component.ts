import { Component, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {

  radius:number=0;
  result:number=0;

  area(){
    console.log(this.radius);
    this.result=3.14*(this.radius)*(this.radius);
    console.log(this.result);
 }

  perimeter(){
   console.log(this.radius);
   this.result=2*(3.14)*(this.radius);
   console.log(this.result);

 }

}
