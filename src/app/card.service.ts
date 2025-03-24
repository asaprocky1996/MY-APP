import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private _httpClient:HttpClient) { }

   getcard():Observable<any>{

    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student')

  }

  getFilteredcard(term:any):Observable<any>{
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter='+term)
  }

  getSortedcard(column:any,order:any):Observable<any>{
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student?sortBy='+column+"&order="+order)
  }

  deletcard(id:any):Observable<any>{
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student/'+id);
  }

  getPaginatedcard(limit:any , page:any):Observable<any>{
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student?limit='+limit+"&page="+page)

  }

  createcard(data:any):Observable<any>{
    return this._httpClient.post('https://6128991386a213001729f9df.mockapi.io/test/v1/student',data)
  }

}
