import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {

  term:string='';

  accounts:any=[];
 
  constructor(private _accountsService:AccountsService){
     _accountsService.getaccounts().subscribe(
      (data:any)=>{
        console.log(data);
        this.accounts=data;
      },(err:any)=>{
        alert('Inetrnal Servor Error')
      }
     )
  }

  //FILTER()//

  
  filter(){
    this._accountsService.getFilteredAccounts(this.term).subscribe(
      (data:any)=>{
        console.log(data);
        this.accounts=data;
      },(err:any)=>{
        alert('Internal server error')
      }
    )
  }


  column:string='';
  order:string='';

  //sort(){
    //this._accountsService.getSortedAccounts(this.column,this.order).subscribe(
      //(data:any)=>{
        //console.log(data);
        //this.accounts=data;
      //},(err:any)=>{
       // alert('internal server error')
      //}
    //)
  //}
  
   
  loadAccounts(){
    this._accountsService.getaccounts().subscribe(
      (data:any)=>{
        console.log(data);
        this.accounts=data;
        console.log(this.accounts);
      },(err:any)=>{
        alert('internal server error')
      }
    )
  }
   
  delete(id:any){
    if(confirm('Are yo sure you want to delete')==true){
    this._accountsService.deletAccounts(id).subscribe(
      (data:any)=>{
        alert('Record deleted succeessfully');
        this.loadAccounts();
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
    this._accountsService.getPaginatedAccounts(this.limit,this.page).subscribe(
      (data:any)=>{
        console.log(data);
        this.accounts=data;
      },(err:any)=>{
        alert('Internal server error')
      }
    )
  }

}
