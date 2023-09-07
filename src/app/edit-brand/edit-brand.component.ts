import { Component } from '@angular/core';
import { Brand } from '../brand';
import { BrandService } from '../services/brand.service';
import {FormBuilder,FormGroup} from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
@Component({
  selector: 'app-edit-brand',
  templateUrl: './edit-brand.component.html',
  styleUrls: ['./edit-brand.component.css']
})
export class EditBrandComponent {
  updateBrandForm!:FormGroup
  constructor(
    private actRoute:ActivatedRoute,
    private router:Router,
    private fb:FormBuilder,
    private brandService:BrandService
  ) {
    this.updateBrandForm=this.fb.group({
      brandId:[''],
      brandName:['']
    })

    var id=this.actRoute.snapshot.paramMap.get('id');
    this.brandService.GetBrandId(id).subscribe((data)=>{
      this.updateBrandForm=this.fb.group({
        brandId:[data.brandId],
        brandName:[data.brandName]
      });
    });
  }

  submitForm()
  {
    var id= this.actRoute.snapshot.paramMap.get('id');
    this.brandService.UpdateBrand('/'+id,this.updateBrandForm.value).subscribe(res=>{
      this.router.navigateByUrl('brand-list');
    });
  }
}
