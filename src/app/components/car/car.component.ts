import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/cardetail';
import { CarService } from 'src/app/services/car.service';
import { CardetailService } from 'src/app/services/cardetail.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars:Car []=[];
  carDetails:CarDetail[]=[];
  currentCar:Car;
  constructor(private carService:CarService,
    private activatedRoute:ActivatedRoute,
    private carDetailService:CardetailService
    ) { }

  ngOnInit(): void { 
    this.activatedRoute.params.subscribe(params=>
      {
        if(params["brandId"]){
          this.getCarsByBrand(params["brandId"])
        }
        else if(params["colorId"]){
          this.getCarsByColor(params["colorId"])
        }
        else if(params["id"]){
          this.getCarDetailId(params["id"])
        }

        else {
          this.getCars()
        }
      }
      )
  }

  getCars()
  {
     this.carService.getCars().subscribe(response=>{
       this.cars=response.data
     })
  }

  getCarsByColor(colorId:number)
  {
     this.carService.getCarsByColor(colorId).subscribe(response=>{
       this.cars=response.data
     })
  }
  
  setCurrentCar(car:Car){
    this.currentCar=car
  }
  getCarsByBrand(brandId:number)
  {
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.cars=response.data
    })
  }
  
  getCarDetailId(id:number){
    this.carDetailService.getCarDetailId(id).subscribe(response=>{
      this.carDetails=response.data
    })
  }
}
