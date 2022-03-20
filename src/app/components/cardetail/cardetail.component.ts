import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/cardetail';
import { CarImageService } from 'src/app/services/car-image.service';
import { CardetailService } from 'src/app/services/cardetail.service';



@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {

  currentCars : CarDetail[]=[];
  currentCar: CarDetail;
  dataLoaded=false
  

  constructor(private cardetailService:CardetailService,
    private activatedRoute:ActivatedRoute,
    private carImageService:CarImageService) { }

    ngOnInit(): void {
      this.activatedRoute.params.subscribe(params=>{
        if(params["id"]){
          this.getCarDetailId(params["id"])
        }
      })
    }

  getCarDetailId(id:number){
    this.cardetailService.getCarDetailId(id).subscribe(response=>{
      this.currentCars=response.data
    })
  }
  getCarImage(imagePath:string){(console.log(imagePath))
    return this.carImageService.getCarImage(imagePath)
  }

  

}
