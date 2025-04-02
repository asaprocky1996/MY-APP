import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent {


  area:string='';
  textlength:number=0;

    

     @Output() textareaEvent:EventEmitter<string>=  new EventEmitter();



      text(){
        this.textareaEvent.emit(this.area);
        this.textlength=this.area.length;
        console.log(this.textlength)
      }
  
  }


