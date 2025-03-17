import { Component } from '@angular/core';
import { VechileService } from '../vechile.service';

@Component({
  selector: 'app-vechile',
  templateUrl: './vechile.component.html',
  styleUrls: ['./vechile.component.css']
})
export class VechileComponent {

       vechiles:any=[];    
  constructor(private _vechileService:VechileService){
    _vechileService.getVechiles().subscribe(
      (data:any)=>{
        console.log(data);
        this.vechiles=data;
      },(err:any)=>{
        alert('Internal Servor Error')
      }
    )
  }

}
