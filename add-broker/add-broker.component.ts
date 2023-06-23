import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddbrokerService } from 'src/app/Services/addbroker.service';
import { Broker } from '../_models/Broker';

@Component({
  selector: 'app-add-broker',
  templateUrl: './add-broker.component.html',
  styleUrls: ['./add-broker.component.css']
})
export class AddBrokerComponent {


  nbroker:Broker=new Broker(0,"","","","","");
  constructor(public brokerSer:AddbrokerService,private router: Router){}
  
  Add(){
    this.brokerSer.add(this.nbroker).subscribe(a=>{
      console.log(a);
    
    },er=>{
      console.log(er)
    })
}


}
