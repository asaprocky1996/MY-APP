import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

    value:string='';
    textlength:number=0;
    capture(value:string){
      this.value=value;
      console.log(value);
      this.textlength=this.value.length;
    }




}
