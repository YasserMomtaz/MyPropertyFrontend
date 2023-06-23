import { Injectable } from '@angular/core';
import { Requests } from '../_models/requests';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  private apiUrl = 'https://localhost:7080/api/Pending/';
  private apiUrlBroker ='https://localhost:7080/brokerId';
  private apiUrlAccepted ='https://localhost:7080/api/Pending/'
  private apiUrlDetails = 'https://localhost:7080/details/'

  constructor(private http: HttpClient) { }



  getAll(): Observable<Requests[]> {
    return this.http.get<Requests[]>(this.apiUrl);
  }

  GetBrokers():Observable<any> {
    return this.http.get<any>(this.apiUrlBroker);
  }

  Accepted(id:number,brokerId:any):Observable<any> {
    const params = { brokerId:brokerId};
    return this.http.patch<any>(this.apiUrlAccepted+id,{params},{params});
  }

  Delete(id:number):Observable<any>{
    return this.http.delete<any>(this.apiUrl+id);
  
  }

  GetDetails(id:number):Observable<any>{
    return this.http.get<any>(this.apiUrlDetails+id)
  }
   
  
}
 
