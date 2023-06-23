import { Apartment } from './../../_models/Apartment';
import { Component, OnInit } from '@angular/core';
import { ApartmentService } from 'src/app/Services/apartment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RequestsService } from 'src/app/Services/requests.service';


@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.css']
})
export class RequestDetailsComponent implements OnInit {
  sub: Subscription | null = null;
  Apartment: Apartment | any = null;
  private response: any;
  public notFavorite: boolean = true; // will use it later
  public Price: number=0;
  constructor(
    private appartementService: RequestsService,
    private Router: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.sub = this.Router.queryParams.subscribe((data) => {
      this.appartementService.GetDetails(data['id']).subscribe((data) => {
        this.Apartment = data;
      });
    });
  }
  activeSlideIndex = 0;
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
  BackToList(){
    this.route.navigate(['/requests'])
  }
}
