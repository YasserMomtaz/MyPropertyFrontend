import { Injectable } from '@angular/core';
import { Add_Apartemnt } from '../_models/Add-Apartment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UploadFileDto } from '../_models/UploadFile';

@Injectable({
  providedIn: 'root',
})
export class ApartmentService {
  baseurl: string = 'https://localhost:7080/api/Users/AddAppartement';
  photourl: string = 'https://localhost:7080/api/Photos';
  constructor(public http: HttpClient) {}

  add(Apartemnt: Add_Apartemnt) {
    return this.http.post<Add_Apartemnt>(this.baseurl, Apartemnt);
  }

  public upload(files: File[]): Observable<UploadFileDto[]> {
    const form = new FormData();
    for (let i = 0; i < files.length; i++) {
      form.append(`files`, files[i]);
    }

    return this.http.post<UploadFileDto[]>(this.photourl, form);
  }
}
