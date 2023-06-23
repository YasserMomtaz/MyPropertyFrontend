import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Broker } from '../_models/Broker';

@Injectable({
  providedIn: 'root'
})
export class AddbrokerService {

  baseurl:string="https://localhost:7080/api/Mangers/AddBroker"

  add(Broker:Broker){
    return this.http.post<Broker>(this.baseurl,Broker);
   }

  constructor(public http:HttpClient) { }
}
