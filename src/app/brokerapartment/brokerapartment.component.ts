import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrokerapartmentService } from 'src/app/Services/brokerapartment.service';
import { Brokerapartment } from '../_models/brokerapartment';

@Component({
  selector: 'app-brokerapartment',
  templateUrl: './brokerapartment.component.html',
  styleUrls: ['./brokerapartment.component.css']
})
export class BrokerapartmentComponent implements OnInit {

  constructor(public BAService:BrokerapartmentService){
  }
  ngOnInit(): void {
    this.BAService.getAll().subscribe(data=>{
      this.brokerAp=data;
    })
  }
  brokerAp:Brokerapartment[]=[];

  activeSlideIndex = 0;
}
