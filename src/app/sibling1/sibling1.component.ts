import { Component } from '@angular/core';
import { CommonsiblingService } from '../commonsibling.service';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component {

  count:number=0;

  constructor(private _commonsiblingService:CommonsiblingService){}

  send(){
    console.log(this.count);
    this._commonsiblingService.countSub.next(this.count);
  }

}
