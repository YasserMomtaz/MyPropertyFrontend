import { Component, OnInit } from '@angular/core';
import { ApartmentService } from 'src/app/Services/add-apartment.service';
import { Add_Apartemnt } from '../_models/Add-Apartment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css'],
})
export class AddApartmentComponent {
  apart: Add_Apartemnt = new Add_Apartemnt();
  selectedFiles: File[] = [];
  urls: string[] = [];
  apartForm: FormGroup;
  submitted: boolean = false;
  constructor(
    public apartSer: ApartmentService,
    private formBuilder: FormBuilder,
    private route: Router
  ) {
    this.apartForm = this.formBuilder.group({
      userId: ['', Validators.required],
      title: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      area: ['', [Validators.required, Validators.min(0)]],
      minprice: ['', [Validators.required, Validators.min(0)]],
      maxprice: ['', [Validators.required, Validators.min(0)]],
      type: ['', Validators.required],
      bedrooms: ['', [Validators.required, Validators.min(0)]],
      bathrooms: ['', [Validators.required, Validators.min(0)]],
      description: ['', Validators.required],
      midescription: ['', Validators.required],
      file: [''],
    });
  }


  onSubmit() {

    const currentDate = new Date();
    this.apart.adDate = currentDate;
    this.apart.userId="2";
    this.apart.title=this.apartForm.get('title')?.value;
    this.apart.address=this.apartForm.get('address')?.value;
    this.apart.city=this.apartForm.get('city')?.value;
    this.apart.area=this.apartForm.get('area')?.value;
    this.apart.minPrice=this.apartForm.get('minprice')?.value;
    this.apart.maxPrice=this.apartForm.get('maxprice')?.value;
    this.apart.type=this.apartForm.get('type')?.value;
    this.apart.bedrooms=this.apartForm.get('bedrooms')?.value;
    this.apart.bathrooms=this.apartForm.get('bathrooms')?.value;
    this.apart.description=this.apartForm.get('description')?.value;
    this.apart.miniDescription=this.apartForm.get('midescription')?.value;
    console.log(this.apart.title);
    //this.apart = this.apartForm.value;
    this.apartSer.add(this.apart).subscribe(() => {
      console.log('apartment created successfully');
      this.route.navigate(['/buy'])
    });
  }

  uploadPhoto(e: Event) {
    const input = e.target as HTMLInputElement;
    const files = input.files;

    if (!files || files.length == 0) {
      return;
    }

    this.selectedFiles = [];
    for (let i = 0; i < files.length; i++) {
      this.selectedFiles.push(files[i]);
    }

    this.apartSer.upload(this.selectedFiles).subscribe((responses) => {
      for (let i = 0; i < responses.length; i++) {
        const response = responses[i];
        const url = response.url;
        // You can do something with the URL, such as assigning it to a model property.

        this.urls.push(url);
      }
      this.apart.photoUrl = this.urls;
      console.log(this.apart.photoUrl);
    });
  }
}
