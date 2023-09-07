import { Component } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { BrandService } from '../services/brand.service';
import { Brand } from '../brand';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent {

  brandForm!:FormGroup;
  constructor(
    private router:Router,
    private fb:FormBuilder,
    private brandService:BrandService
  ){}
  ngOnInit()
  {
    this.brandForm=this.fb.group({
      brandName:['',Validators.required]
    });
  }

  submitForm(){
    this.brandService.AddNewBrand(this.brandForm.value).subscribe(res =>{
      console.log('Brand added');
      this.router.navigateByUrl('brand-list');
    })
  }
}
