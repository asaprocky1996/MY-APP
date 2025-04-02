import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent {

   id:number=0;
    accounts:any='';
  
    constructor(private _activatedRoute:ActivatedRoute,
      private _accountService:AccountsService){
      _activatedRoute.params.subscribe(
        (data:any)=>{
          console.log(data.id);
          this.id=data.id;
          console.log(this.id);
        },(err:any)=>{
          alert('Server Error');
        }
      )
  
      _accountService.getAccounts(this.id).subscribe(
        (data:any)=>{
          console.log(data);
          this.accounts=data;
        },(err:any)=>{
          alert('Server Error')
        }
  
      )
    }
  

}
