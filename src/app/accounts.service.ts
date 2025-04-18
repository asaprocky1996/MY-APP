import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  getSortedAccounts(column: string, order: string) {
    throw new Error('Method not implemented.');
  }


  constructor(private _httpClient:HttpClient) { }

  baseUrl:string='/assets/data.json';

  getaccounts():Observable<any>{
    //return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals');
    return this._httpClient.get(this.baseUrl);
  }

  createAccounts(data:any):Observable<any>{
    return this._httpClient.post('https://6128991386a213001729f9df.mockapi.io/test/v1/principals',data);
  }

  //FILTER//
  getFilteredAccounts(term:any):Observable<any>{ 
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter='+term);
}

  getSortedAcconts(column:any,order:any):Observable<any>{
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals?sortBy='+column+"&order="+order)
  }

  
  deletAccounts(id:any):Observable<any>{
    return this._httpClient.delete('https://6128991386a213001729f9df.mockapi.io/test/v1/principals/'+id);
  }

  getPaginatedAccounts(limit:any , page:any):Observable<any>{
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals?limit='+limit+"&page="+page);
  }


  getAccounts(id:any):Observable<any>{
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals/'+id);
  }

  updateAccounts(id:any,data:any):Observable<any>{
    return this._httpClient.put('https://6128991386a213001729f9df.mockapi.io/test/v1/principals/'+id,data);
  }
}
