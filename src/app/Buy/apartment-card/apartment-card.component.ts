
import { Sell_Appartement } from 'src/app/_models/Sell_Appartement';
import { Component, Input, ChangeDetectorRef, EventEmitter, Output } from '@angular/core';



import { ApartmentService } from 'src/app/Services/apartment.service';
import { Apartment } from 'src/app/_models/Apartment';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-apartment-card',
  templateUrl: './apartment-card.component.html',
  styleUrls: ['./apartment-card.component.css'],
})
export class ApartmentCardComponent {
  private response: any;
  public Price: any;
  private cdRef!: ChangeDetectorRef;

  @Input() id: number = 1;
  @Input() title: string = '';
  @Input() address: string = '';
  @Input() area: string = '';
  @Input() city: string = '';
  @Input() bathrooms: number = 1;
  @Input() bedrooms: number = 1;
  @Input() miniDescription: string = '';
  @Input() photos: string[] = [];
  @Input() IsFavorite:boolean|null=null;

  constructor(private apartService: ApartmentService, private route: Router) {}
  @Output() refreshParent: EventEmitter<boolean> = new EventEmitter<boolean>();
  AddToFav(id: number) {
    this.apartService.AddToFav(id).subscribe((response: Response) => {
      this.response = response;
      this.IsFavorite=true;
    });
  }
  RemoveFromFav(id:number){
    this.apartService.RemoveFromFav(id).subscribe((response: Response) => {
      this.response = response;
      this.IsFavorite=false;
    });
  }
  activeSlideIndex = 0;

  nextSlide() {
    this.activeSlideIndex++;
    if (this.activeSlideIndex >= this.photos.length) {
      this.activeSlideIndex = 0;
    }
  }
  prevSlide() {
    this.activeSlideIndex--;
    if (this.activeSlideIndex <= 0) {
      this.activeSlideIndex = 0;
    }

  }

  getDetails() {
    this.route.navigate(['/appartementDetails'], {
      queryParams: { id: this.id },
    });
  }
  sellAppartement() {
    let soldApp: Sell_Appartement = new Sell_Appartement(this.id, this.Price);
    this.apartService.SellAppartement(soldApp).subscribe((data) => {
      this.refreshParent.emit(true)
    });
  }
  deleteAppartement(){
    this.apartService.deleteAppartement(this.id).subscribe((data)=>{
      this.refreshParent.emit(true);
    })

  }
}
