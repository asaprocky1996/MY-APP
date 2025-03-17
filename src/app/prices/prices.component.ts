import { Component } from '@angular/core';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent {

  prices: any=[
    {ProductName: 'Pen' , Price: 20 , Rating: 3, FreeDelivery: 'False'},
    {ProductName: 'Mobilecase' , Price: 199 , Rating: 3.5, FreeDelivery: 'False'},
    {ProductName: 'Remote' , Price: 600 , Rating: 3, FreeDelivery: 'False'},
    {ProductName: 'Shirt' , Price: 3000 , Rating: 4, FreeDelivery: 'True'},
    {ProductName: 'Cap' , Price: 4000 , Rating: 5, FreeDelivery: 'True'},
    {ProductName: 'Watch' , Price: 7000 , Rating: 4.5, FreeDelivery: 'True'},
    {ProductName: 'Iphone' , Price: 80000 , Rating: 5, FreeDelivery: 'True'},

  ]
  delete(i:number){

    this.prices.splice(i,1);
  }

  product:string='';
  search(){
    this.prices=this.prices.filter((price:any)=>price.ProductName.includes(this.product));
  }

  
    Delivery:string='';
    only(){
      this.prices = this.prices.map((price: any) => {
    
        if (price.FreeDelivery === 'True') {
          return price; 
        }
      });
   }

  

  sortup(){

     this.prices.sort((a:any,b:any)=>a.Price-b.Price);
     this.prices.sort((a:any,b:any)=>a.Rating-b.Rating);
  }

  sortdown(){

    this.prices.sort((a:any,b:any)=>b.Price-a.Price);
    this.prices.sort((a:any,b:any)=>b.Rating-a.Rating);
  }

  discount(){
    this.prices=this.prices.map((price:any)=>{
      price.Price=price.Price*0.5
      return price;

    })
  }
   
  applyCharge() {
    
    this.prices = this.prices.map((price: any) => {
    
      if (price.FreeDelivery === 'False') {
        return {Price: price.Price + 100 }; 
      }
      return price; 
    });

  }

  reduce(){
    let totalCost=this.prices.reduce((sum:any,price:any)=>sum+price.Price,0);
    alert(totalCost);
  }  
  
    cart(){
      let items=this.prices.length;
      alert(items);
    
    }

    Name:string='';
    Price:number=0;
    Rating:number=0;
    FreeDelivery:string= '';

    create(){
      let price={
        ProductName:this.Name,
        Price:this.Price,
        Rating:this.Rating,
        FreeDelivery:this.FreeDelivery,
      };
      this.prices.unshift(price);
    }
}

  
