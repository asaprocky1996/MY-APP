import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../card.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent {

  id:number=0;
  card:any='';

  constructor(private _activatedRoute:ActivatedRoute,
    private _cardService:CardService){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.id=data.id;
        console.log(this.id);
      },(err:any)=>{
        alert('Server Error');
      }
    )

    _cardService.getCard(this.id).subscribe(
      (data:any)=>{
        console.log(data);
        this.card=data;
      },(err:any)=>{
        alert('Server Error')
      }

    )
  }

}
