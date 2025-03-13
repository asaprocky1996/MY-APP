import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  isVisible:boolean=false;

  states:string[]=['Andhra Pradesh','karnataka','kerala',
    'Maharastra','Tamilnadu','Telangana'];
  

  products:any=[
    {name:'pen',price:10,rating:3.7},
    {name:'book',price:50,rating:3.8},
    {name:'shirt',price:500,rating:3.5},
    {name:'shoes',price:1599,rating:4},
    {name:'Bike',price:100000,rating:4.5},
    {name:'Car',price:1000000,rating:4.9},

  ]

  newDate:any=new Date();

}
