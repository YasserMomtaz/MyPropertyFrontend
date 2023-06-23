import { Component } from '@angular/core';

@Component({
  selector: 'app-main-landing-content',
  templateUrl: './main-landing-content.component.html',
  styleUrls: ['./main-landing-content.component.css']
})
export class MainLandingContentComponent {

  public flag=false;

  onUserClick(flagchild:boolean){
  this.flag=flagchild;
  }
}
