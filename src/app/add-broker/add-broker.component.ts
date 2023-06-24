import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddbrokerService } from 'src/app/Services/addbroker.service';
import { AddBroker } from '../_models/AddBroker';

@Component({
  selector: 'app-add-broker',
  templateUrl: './add-broker.component.html',
  styleUrls: ['./add-broker.component.css']
})
export class AddBrokerComponent {


  nbroker:AddBroker=new AddBroker("","","","","");
  constructor(public brokerSer:AddbrokerService,private router: Router){}
  
  Add(){
    this.brokerSer.add(this.nbroker).subscribe(a=>{
     this.router.navigateByUrl("/mainpage")
    
    },er=>{
      console.log(er)
    })
}


}
