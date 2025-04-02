import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CardService } from '../card.service';
import { ActivatedRoute, Router } from '@angular/router';

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
   id:number=0;
  constructor(private _cardService:CardService,
    private _router:Router,
    private _activateRoute:ActivatedRoute ){
      _activateRoute.params.subscribe(
        (data:any)=>{
          console.log(data.id);
            this.id=data.id;
        },(err:any)=>{
          alert('Server Error')
        }
      )

      if(this.id){
        _cardService.getCard(this.id).subscribe(
          (data:any)=>{
            console.log(data);
            this.cardForm.patchValue(data);
          },(err:any)=>{
            alert('Server Error')
          }
        )
      }
    }
  create(){

    if(this.id){

      console.log(this.cardForm.value);
      this._cardService.updatecard(this.id,this.cardForm.value).subscribe(
          (data:any)=>{
          console.log(data);
          alert('student record updated succeessfully!');
          this._router.navigateByUrl("/dashboard/card");
        },(err:any)=>{
          alert('server error');
        }

      )

    }else{

       
      console.log(this.cardForm.value);
      this._cardService.createcard(this.cardForm.value).subscribe(
        (data:any)=>{
          console.log(data);
          alert('New student entry created succeessfully');
          this._router.navigateByUrl("/dashboard/card");
        },(err:any)=>{
          alert('Server error');
        }
      )

    }


  
  }
    
  }


