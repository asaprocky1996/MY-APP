import { Component } from '@angular/core';
import { CardService } from '../card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  term:string='';

  card: any=[];

 constructor(private _cardService:CardService){

   _cardService.getCard(this.card).subscribe(
    (data:any)=>{
      console.log(data);
      this.card=data;
    },(err:any)=>{
      alert("Internal server error")
    }
   )
 }

 filter(){
  this._cardService.getFilteredcard(this.term).subscribe(
    (data:any)=>{
      console.log(data);
      this.card=data;
    },(err:any)=>{
      alert('server error ')
    }
  )
 }

 column:string='';
 order:string='';

 sort(){
  this._cardService.getSortedcard(this.column,this.order).subscribe(
    (data:any)=>{
      console.log(data);
      this.card=data;
    },(err:any)=>{
      alert('server error')
    }
  )
 }

 loadcard(){
  this._cardService.getCard(this.card).subscribe(
    (data:any)=>{
      console.log(data);
      this.card=data;
    },(err:any)=>{
      alert('server error')
    }
  )
 }

 delete(id:any){
  if(confirm('Are you sure u want to delete')==true){
    this._cardService.deletecard(id).subscribe(
      (data:any)=>{
        alert('Record deleted succeessfully');
        this.loadcard();
      },(err:any)=>{
        alert()
      }
    )
  }else{
    alert('you have cancelled')
  }
 }

 limit:string='';
  page:string='';
  pagination(){
    this._cardService.getPaginatedcard(this.limit,this.page).subscribe(
      (data:any)=>{
        console.log(data);
        this.card=data;
      },(err:any)=>{
        alert('server error')
      }
    )
  }

}
