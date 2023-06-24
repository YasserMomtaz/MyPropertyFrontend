import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { AddmanagerService } from '../Services/addmanger.service';

import { Manager } from '../_models/Manger';
@Component({
  selector: 'app-add-manager',
  templateUrl: './add-manager.component.html',
  styleUrls: ['./add-manager.component.css']
})
export class AddManagerComponent {

  nmanager:Manager=new Manager("","","","","");
  constructor(public manSer:AddmanagerService,private router: Router){}
  Add(){
      this.manSer.add(this.nmanager).subscribe(a=>{
        console.log(a);
        this.router.navigateByUrl("/mainpage")
      
      },er=>{
        console.log(er)
      })
  }
}

