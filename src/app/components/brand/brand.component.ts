
import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';



@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brands:Brand[]=[];

  currentbrand:Brand;

  dataLoaded=false;

  constructor(private brandService:BrandService) { }

  ngOnInit(): void { this.getBrands();
  }

  getBrands() 
  {
    this.brandService.getBrand().subscribe(response=>{
      this.brands=response.data
      this.dataLoaded=true;
    })

    }
    setCurrentBrand(brand:Brand){
      this.currentbrand=brand
    }
    getCurrentBrand(brand:Brand){
      if(brand==this.currentbrand){
        return "list-group-item active"
      }
      else{
        return "list-group-item"
      }
      }
      getAllBrandClass(){
        if(!this.currentbrand)
        return "list-group-item active"
        else
        return "list-group-item"
      }
      brandClass(){
        this.currentbrand={brandId:0,brandName:""}
      }
      
   
}
