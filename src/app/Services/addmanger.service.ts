import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Manager } from '../_models/Manger';



@Injectable({
  providedIn: 'root'
})
export class AddmanagerService {

  baseurl:string="https://localhost:7080/api/Mangers/AddManger"


  add(Manager:Manager){
    return this.http.post<Manager>(this.baseurl,Manager);
   }

  constructor(public http:HttpClient) { }
}
