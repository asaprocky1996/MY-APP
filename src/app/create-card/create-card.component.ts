import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CardService } from '../card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent {

  public cardForm:FormGroup = new FormGroup({
    name:new FormControl(),
    phone:new FormControl(),
    dob: new FormControl(),
    city:new FormControl(),
    email:new FormControl(),
    school_name:new FormControl(),
    school_pin:new FormControl(),
    school_logo:new FormControl(),
    profile_picture:new FormControl(),

  })

  constructor(private _cardService:CardService,private _router:Router){}
  create(){
    console.log(this.cardForm.value);
    this._cardService.createcard(this.cardForm.value).subscribe(
      (data:any)=>{
        alert('New student entry created succeessfully');
        this._router.navigateByUrl("/dashboard/card");
      },(err:any)=>{
        alert('Server error')
      }
    )
  }
    
  }


