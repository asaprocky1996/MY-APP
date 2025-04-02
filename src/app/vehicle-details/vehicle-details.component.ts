import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VechileService } from '../vechile.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent {

  id:number=0;
  vehicle:any='';
  constructor(private _activatedRoute:ActivatedRoute,
  private _vechileService:VechileService) {

    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.id=data.id;
        console.log(this.id);
      },(err:any)=>{
        alert('Internal server error');
      }
    )

    _vechileService.getVehilce(this.id).subscribe(
      (data:any)=>{
        console.log(data);
        this.vehicle=data;
      },(err:any)=>{
        alert("Internal server error")
      }
    )
    
  }

}
