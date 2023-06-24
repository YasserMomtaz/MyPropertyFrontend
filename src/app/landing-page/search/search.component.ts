import { Component, EventEmitter, Output } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { ApartmentService } from "src/app/Services/apartment.service";
import { Apartment } from "src/app/_models/Apartment";
import { HttpResponse } from "@angular/common/http";
@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent {
  @Output() flag = new EventEmitter<boolean>(false);
  minArea: any | null;
  maxArea: any | null;
  minPrice: any | null;
  maxPrice: any | null;
  City: string | null = "";
  Address: string | null = "";
  type: string | null = "";
  result: Apartment[] = [];
  public totalApartment: number = 0;
  public page: number = 1;
  public CountPerPage: number = 2;
  public loading: boolean = true;

  constructor(private apartmentService: ApartmentService) {
    this.City = "Alexandria";
    this.type = "Buy";
  }

  findData(page: number) {
    this.flag.emit(true);
    const data = {
      minArea: this.minArea | 0,
      maxArea: this.maxArea | 0,
      minPrice: this.minPrice | 0,
      maxPrice: this.maxPrice | 0,
      City: this.City,
      Address: this.Address,
      type: this.type,
    };

    this.apartmentService.Search(page, this.CountPerPage, data).subscribe({
      next: (response) => {
        console.log("Search response:", response);
        this.result = response.apartmentList;
        this.totalApartment = response.apartmentCount;
        console.log(response);
        this.loading = false;
        this.page = page;
      },
      error: (error: "") => {
        console.error("Error:", error);
      },
    });
  }
}
