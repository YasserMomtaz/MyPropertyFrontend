import { Sell_Appartement } from "src/app/_models/Sell_Appartement";
import {
  Component,
  Input,
  ChangeDetectorRef,
  EventEmitter,
  Output,
  OnInit,
} from "@angular/core";

import { ApartmentService } from "src/app/Services/apartment.service";
import { Apartment } from "src/app/_models/Apartment";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthenticationService } from "src/app/Services/authentication.service";
import { Authorized } from "src/app/_models/authorized";

@Component({
  selector: "app-apartment-card",
  templateUrl: "./apartment-card.component.html",
  styleUrls: ["./apartment-card.component.css"],
})
export class ApartmentCardComponent implements OnInit {
  private response: any;
  public Price: any;
  private cdRef!: ChangeDetectorRef;

  @Input() id: number = 1;
  @Input() title: string = "";
  @Input() address: string = "";
  @Input() area: string = "";
  @Input() city: string = "";
  @Input() bathrooms: number = 1;
  @Input() bedrooms: number = 1;
  @Input() miniDescription: string = "";
  @Input() photos: string[] = [];
  @Input() IsFavorite: boolean | null = null;

  constructor(
    private apartService: ApartmentService,
    private route: Router,
    private authService: AuthenticationService
  ) {}

  //authorization
  public authorized: Authorized = new Authorized("", false);
  ngOnInit(): void {
    this.authService.isAuth$.subscribe((value) => {
      this.authorized.Role = value.Role;
      this.authorized.isAuthorized = value.isAuthorized;
    });
    this.checkIfUserLoggedIn();
  }
  checkIfUserLoggedIn() {
    if (localStorage.getItem("token") && localStorage.getItem("role")) {
      this.authorized.isAuthorized = true;
      this.authorized.Role = localStorage.getItem("role");

      this.authService.isAuth$.next(this.authorized);
    }
  }

  @Output() refreshParent: EventEmitter<boolean> = new EventEmitter<boolean>();
  AddToFav(id: number) {
    if (
      this.authorized.isAuthorized == true &&
      this.authorized.Role == "User"
    ) {
      this.apartService.AddToFav(id).subscribe((response: Response) => {
        this.response = response;
        this.IsFavorite = true;
      });
    } else {
      this.route.navigateByUrl("/login");
    }
  }
  RemoveFromFav(id: number) {
    this.apartService.RemoveFromFav(id).subscribe((response: Response) => {
      this.response = response;
      this.IsFavorite = false;
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
    this.route.navigate(["/appartementDetails"], {
      queryParams: { id: this.id },
    });
  }
  sellAppartement() {
    let soldApp: Sell_Appartement = new Sell_Appartement(this.id, this.Price);
    this.apartService.SellAppartement(soldApp).subscribe((data) => {
      this.refreshParent.emit(true);
    });
  }
  deleteAppartement() {
    this.apartService.deleteAppartement(this.id).subscribe((data) => {
      this.refreshParent.emit(true);
    });
  }
}
