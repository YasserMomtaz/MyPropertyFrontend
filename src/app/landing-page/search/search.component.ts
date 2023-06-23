import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ApartmentService } from 'src/app/Services/apartment.service';
import { Apartment } from 'src/app/_models/Apartment';
import { HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  minArea: number= 0;
  maxArea: number = 0;
  minPrice: number = 0;
  maxPrice: number = 0;
  City: string = '';
  Address: string = '';
  type:string='';
  result: Apartment[] = [];
  public totalApartment:number = 0 ;
  public page:number=1;
  public CountPerPage:number=2;
  public loading: boolean=true;

  constructor(private apartmentService: ApartmentService) {}

  findData(page:number) {
    const data = {
      minArea: this.minArea,
      maxArea: this.maxArea,
      minPrice: this.minPrice,
      maxPrice: this.maxPrice,
      City: this.City,
      Address: this.Address,
      type:this.type,
    };

    this.apartmentService.Search(page,this.CountPerPage,data).subscribe({
      next:(response) => {
        console.log('Search response:', response);
        this.result = response.apartmentList;
        this.totalApartment=response.apartmentCount;
        console.log(response);
        this.loading = false;
        this.page=page;
      },
      error:(error:"") => {
        console.error('Error:', error);
      }
  });
  }
}
