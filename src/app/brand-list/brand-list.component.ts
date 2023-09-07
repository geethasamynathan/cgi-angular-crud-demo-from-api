import { Component } from '@angular/core';
import { BrandService } from '../services/brand.service';
import { Brand } from '../brand';
@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent {
  brandList:any=[];
  constructor(private brandService:BrandService){}
  ngOnInit(){
  this.loadBrand();
  console.log(this.brandList)
  }
  loadBrand(){
    return this.brandService.GetAllBrands().subscribe((data)=>{
      console.log(data)
      this.brandList=data;
    })
  }

  deleteBrand(data:Brand){
    var index=this.brandList.map((x :{brandName:any;}) =>{return x.brandName}).indexOf(data.brandId);
    return this.brandService.DeleteBrand(data.brandId).subscribe(res =>{
      this.loadBrand();
    })
    }
  }

