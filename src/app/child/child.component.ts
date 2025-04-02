import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() a:number=0;

  @Output() childEvent:EventEmitter<string>= //   @Output() childEvent:EventEmitter<number>= fornumber//

  new EventEmitter();


  child:string=''
  send(){
    this.childEvent.emit(this.child);   //this.childEvent.emit(this.number)
  }

}
