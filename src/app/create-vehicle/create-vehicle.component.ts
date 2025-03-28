import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VechileService } from '../vechile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {


   public vehicleForm:FormGroup=new FormGroup({

    Vehicle:new FormControl(),
    color:new FormControl(),
    cost:new FormControl(),
    fuel:new FormControl(),

  })

  constructor(private _vehicleService:VechileService,private _router:Router){}
  create(){
    console.log(this.vehicleForm.value);
    this._vehicleService.createVehicle(this.vehicleForm.value).subscribe(
      (data:any)=>{
        console.log(data);
        alert("New Vehicle Created Successfully");
        this._router.navigateByUrl("/dashboard/vechile");
      },(err:any)=>{
        alert("Internal server Error")
      }
    )

  }

}
