import { Component, ChangeDetectorRef,OnInit } from '@angular/core';
import { ApartmentService } from 'src/app/Services/apartment.service';
import { Apartment } from 'src/app/_models/Apartment';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
})
export class MainContentComponent implements OnInit {
  constructor(private apartService: ApartmentService) {}

  public apartments: Apartment[] = [];
  public totalApartment:number = 0 ;
  public page:number=1;
  public CountPerPage:number=2;
  public loading: boolean=true;

  GetApartments(page:any){
    this.apartService.getBuyData(page,this.CountPerPage).subscribe({next:(data) => {
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

  ngOnInit(): void {
    this.GetApartments(1);

  }
}
