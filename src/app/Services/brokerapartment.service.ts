import { Injectable } from '@angular/core';
import { Brokerapartment } from '../_models/brokerapartment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BrokerapartmentService {

  baseurl:string="https://localhost:7080/getBrokerApartment"

  getAll(){
    return this.http.get<Brokerapartment[]>(this.baseurl)
  }


  constructor(public http:HttpClient) { }
}
