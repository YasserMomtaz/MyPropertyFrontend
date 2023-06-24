import { Injectable } from '@angular/core';
import { Apartment } from '../_models/Apartment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApartmentListPaginationDto } from '../_models/ApartmentListPaginationDto';
import { Sell_Appartement } from '../_models/Sell_Appartement';


@Injectable({
  providedIn: 'root',
})
export class ApartmentService {


  url:string='https://localhost:7080/search/';
  private apiUrlBuy = 'https://localhost:7080/buy/';
  private apiUrlRent = 'https://localhost:7080/rent/';
  private apiURLRemoveFav = 'https://localhost:7080/removeFromFavorite/'
  private apiUrlAddFav = 'https://localhost:7080/addtofavorite/';
  private apiUrlFavList = 'https://localhost:7080/allfavorites';
  private apiGetDetails = 'https://localhost:7080/';
  private apiSellAppartement = 'https://localhost:7080/sellAppartement';
  private apideleteAppartement = 'https://localhost:7080/DeleteAppartement/';


  constructor(private http: HttpClient) { }

  getBuyData(Page:number,CountPerPage:number): Observable<ApartmentListPaginationDto> {
    return this.http.get<ApartmentListPaginationDto>(this.apiUrlBuy+Page+"/"+CountPerPage);

  }
  
  getrentData(Page:number,CountPerPage:number):Observable<ApartmentListPaginationDto>{
    return this.http.get<ApartmentListPaginationDto>(this.apiUrlRent+Page+"/"+CountPerPage);
  }


  AddToFav(apartid: number): Observable<any> {
    const body = { apartid };
    console.log(body);
    return this.http.post<any>(this.apiUrlAddFav + apartid, body, {
      observe: 'response',
    });
  }

  RemoveFromFav(apartid: number): Observable<any> {
    const body = { apartid };
    console.log(body);
    return this.http.delete<any>(this.apiURLRemoveFav + apartid);
  }

  GetFav(): Observable<any> {
    return this.http.get<any>(this.apiUrlFavList);
  }
  Search(Page:number,CountPerPage:number,data: any): Observable<ApartmentListPaginationDto> {
    return this.http.get<ApartmentListPaginationDto>(this.url+Page+"/"+CountPerPage, { params: data });
  }

  GetDetails(id: any) {
    return this.http.get<Apartment>(this.apiGetDetails + id);
  }
  SellAppartement(soldApp: Sell_Appartement) {
    return this.http.post<any>(this.apiSellAppartement, soldApp);
  }
  deleteAppartement(id: any) {
    return this.http.delete<any>(this.apideleteAppartement+id)
  }
}
