import { Component } from '@angular/core';
import { VechileService } from '../vechile.service';
import { BalancePipe } from "../balance.pipe";

@Component({
  selector: 'app-vechile',
  templateUrl: './vechile.component.html',
  styleUrls: ['./vechile.component.css'],
})
export class VechileComponent {
       
       term:string='';
       vechiles:any=[];    
  constructor(private _vechileService:VechileService){
    _vechileService.getVechiles().subscribe(
      (data:any)=>{
        console.log(data);
        this.vechiles=data;
      },(err:any)=>{
        alert()
      }
    )
  }

  //--------------------Filter----------------------------------//

  filter(){
    this._vechileService.getFilteredVehicles(this.term).subscribe(
      (data:any)=>{
        console.log(data);
        this.vechiles=data;
      },(err:any)=>{
        alert('Internal server error')
      }
    )
  }

  //---------------------------Sort----------------------------------------------//
  column:string='';
  order:string='';

  sort(){
    this._vechileService.getSortedVehicles(this.column,this.order).subscribe(
      (data:any)=>{
        console.log(data);
        this.vechiles=data;
      },(err:any)=>{
        alert('Internal server error')
      }
    )
  }

  //------------------------------------------delete----------------------------------------//
   
  loadVehicles(){
    this._vechileService.getVechiles().subscribe(
      (data:any)=>{
        console.log(data);
        this.vechiles=data;
        console.log(this.vechiles);
      },(err:any)=>{
        alert('internal server error')
      }
    )
  }
   
  delete(id:any){
    if(confirm('Are yo sure you want to delete')==true){
    this._vechileService.deletVehilce(id).subscribe(
      (data:any)=>{
        alert('Record deleted succeessfully');
        this.loadVehicles();
      },(err:any)=>{
        alert('Internal server error');
      }
    )
  }else{
    alert('You have cancelled')
  }
  }

  limit:string='';
  page:string='';
  pagination(){
    this._vechileService.getPaginatedVehicles(this.limit,this.page).subscribe(
      (data:any)=>{
        console.log(data);
        this.vechiles=data;
      },(err:any)=>{
        alert('Internal server error')
      }
    )
  }
}
