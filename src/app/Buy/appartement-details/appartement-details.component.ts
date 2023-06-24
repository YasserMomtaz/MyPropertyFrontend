import { Apartment } from './../../_models/Apartment';
import { Sell_Appartement } from 'src/app/_models/Sell_Appartement';
import { Component, OnInit } from '@angular/core';
import { ApartmentService } from 'src/app/Services/apartment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-appartement-details',
  templateUrl: './appartement-details.component.html',
  styleUrls: ['./appartement-details.component.css'],
})
export class AppartementDetailsComponent implements OnInit {
  sub: Subscription | null = null;
  _date:Date = new Date();
  Apartment: Apartment  =  new Apartment(0,"","","","","","",0,0,0,"",[],1,"",this._date,'',"",false);
  private response: any;
  public IsFavorite: boolean = true; // will use it later
  public Price: number=0;
  constructor(
    private appartementService: ApartmentService,
    private Router: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.sub = this.Router.queryParams.subscribe((data) => {
      this.appartementService.GetDetails(data['id']).subscribe((data) => {
        this.Apartment = data;
        console.log(this.Apartment);
      });
    });
  }
  AddToFav(id: number) {
    this.appartementService.AddToFav(id).subscribe((response: Response) => {
      this.response = response;
      this.IsFavorite = true;
      this.Apartment.isFavorite=true;
    });
  }
  RemoveFromFav(id:number){
    this.appartementService.RemoveFromFav(id).subscribe((response: Response) => {
      this.response = response;
      this.Apartment.isFavorite=false;
      this.IsFavorite=false;
    });
  }
  activeSlideIndex = 0;
  //care
  nextSlide() {
    this.activeSlideIndex++;
    if (this.activeSlideIndex >= (this.Apartment?.photos?.length ?? 0)) {
      this.activeSlideIndex = 0;
    }
  }
  prevSlide() {
    this.activeSlideIndex--;
    if (this.activeSlideIndex <= 0) {
      this.activeSlideIndex = 0;
    }
  }
  sellAppartement() {
    let soldApp: Sell_Appartement = new Sell_Appartement(
      this.Apartment.id,
      this.Price
    );
    this.appartementService.SellAppartement(soldApp).subscribe((data) => {
      this.route.navigateByUrl("/buy")
    });
  }
  deleteAppartement() {
    this.appartementService
      .deleteAppartement(this.Apartment.id)
      .subscribe((data) => {
        this.route.navigateByUrl('/buy');
      });
  }
}
