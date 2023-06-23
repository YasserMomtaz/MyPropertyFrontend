import { Component } from '@angular/core';
import { ApartmentService } from 'src/app/Services/apartment.service';
import { Apartment } from 'src/app/_models/Apartment';
@Component({
  selector: 'app-rent-main-content',
  templateUrl: './rent-main-content.component.html',
  styleUrls: ['./rent-main-content.component.css'],
})
export class RentMainContentComponent {
  constructor(private apartService: ApartmentService) {}

  public apartments: Apartment[] = [];
  public totalApartment:number = 0 ;
  public page:number=1;
  public CountPerPage:number=2;
  public loading: boolean=true;

  ngOnInit(): void {
    this.GetApartments(1);

  }
  GetApartments(page:any){
    this.apartService.getrentData(page,this.CountPerPage).subscribe({next:(data) => {
      this.apartments = data.apartmentList;
      this.totalApartment=data.apartmentCount;
      console.log(data);
      this.loading = false;
      this.page=page;
    },
    complete:()=>{
      console.log("done")
    }
    });
  }
  

 
}
