import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountsService } from '../accounts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-accounts',
  templateUrl: './create-accounts.component.html',
  styleUrls: ['./create-accounts.component.css']
})
export class CreateAccountsComponent {


     public accountForm:FormGroup=new FormGroup({

      account_number:new FormControl(),
      available_balance:new FormControl(),
      city:new FormControl(),
      ifsc_code:new FormControl(),
     })


      id:number=0;
       constructor(private _accountService:AccountsService,
         private _router:Router,
         private _activateRoute:ActivatedRoute){
           _activateRoute.params.subscribe(
             (data:any)=>{
               console.log(data.id);
               this.id=data.id;
             },(err:any)=>{
               alert('Internal Server Error')
             }
           )
     
           if(this.id){
             _accountService.getAccounts(this.id).subscribe(
               (data:any)=>{
                 console.log(data);
                 this.accountForm.patchValue(data);
               },(err:any)=>{
                 alert('Internal server error')
               }
             )
           }
         }
       create(){
     
         if(this.id){
     
           console.log(this.accountForm.value);
           this._accountService.updateAccounts(this.id,this.accountForm.value).subscribe(
             (data:any)=>{
               console.log(data);
               alert('Accounts Record Updated Successfully!');
               this._router.navigateByUrl("/dashboard/accounts");
             },(err:any)=>{
               alert('Internal server error')
             }
           )
     
         }else{
     
           console.log(this.accountForm.value);
         this._accountService.createAccounts(this.accountForm.value).subscribe(
           (data:any)=>{
             console.log(data);
             alert("New Account Created Successfully");
             this._router.navigateByUrl("/dashboard/accounts");
           },(err:any)=>{
             alert("Internal server Error")
           }
         )
     
         }
         
     
     
         
     
     
       }
     
  

}
