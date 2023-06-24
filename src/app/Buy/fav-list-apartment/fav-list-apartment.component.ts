import { Component } from '@angular/core';
import { ApartmentService } from 'src/app/Services/apartment.service';
import { Apartment } from 'src/app/_models/Apartment';

@Component({
  selector: 'app-fav-list-apartment',
  templateUrl: './fav-list-apartment.component.html',
  styleUrls: ['./fav-list-apartment.component.css']
})
export class FavListApartmentComponent {
  public apartments:Apartment[] = [];

  constructor(private apartService: ApartmentService) { }

  ngOnInit(): void {
    this.apartService.GetFav().subscribe(
      (data: any[]) => {
        this.apartments = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
