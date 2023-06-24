import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Broker } from '../_models/Broker';
import { AddBroker } from '../_models/AddBroker';

@Injectable({
  providedIn: 'root'
})
export class AddbrokerService {

  baseurl:string="https://localhost:7080/api/Mangers/AddBroker"

  add(Broker:AddBroker){
    return this.http.post<AddBroker>(this.baseurl,Broker);
   }

  constructor(public http:HttpClient) { }
}
