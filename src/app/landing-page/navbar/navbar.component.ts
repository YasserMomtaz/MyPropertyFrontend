import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "src/app/Services/authentication.service";
import { Authorized } from "src/app/_models/authorized";
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  public authorized: Authorized = new Authorized("", false);

  constructor(private authService: AuthenticationService) {}
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
  logout() {
    this.authService.logout();
  }
}
