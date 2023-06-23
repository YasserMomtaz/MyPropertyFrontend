import { Component,OnInit } from '@angular/core';

import { RequestsService } from 'src/app/Services/requests.service';
import { Broker } from 'src/app/_models/Broker';

import { Requests } from 'src/app/_models/requests';

@Component({
  selector: 'app-show-requests',
  templateUrl: './show-requests.component.html',
  styleUrls: ['./show-requests.component.css']
})
export class ShowRequestsComponent implements OnInit {

  requests: Requests[] = [];
  brokers:Broker[]=[];
  selectedItemId:string="";
  Accepted(id:number,broker:string) {
    console.log(id,broker);
    const data = {id,broker};
    this.reqService.Accepted(id,broker).subscribe(()=>this.reqService.getAll()
    .subscribe(requests => this.requests = requests));
  }
  Delete(id:number){
    console.log(id);
    this.reqService.Delete(id).subscribe(()=>this.reqService.getAll()
    .subscribe(requests => this.requests = requests));
  }

  constructor(private reqService: RequestsService) { }

  ngOnInit(): void {
    
    this.reqService.GetBrokers()
        .subscribe(brokers=>this.brokers=brokers);
    this.reqService.getAll()
      .subscribe(requests => this.requests = requests);
  }

}


