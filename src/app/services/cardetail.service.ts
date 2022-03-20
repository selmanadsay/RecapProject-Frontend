import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel.';
import { CarDetail } from '../models/cardetail';


@Injectable({
  providedIn: 'root'
})
export class CardetailService {

  apiUrl="https://localhost:44301/api/"

  constructor(private httpClient:HttpClient) { }

  getCarDetailId(id:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+'cars/getcardetailbycarid?id='+id
    return this.httpClient
    .get<ListResponseModel<CarDetail>>(newPath)
  }
  getCarDetail():Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+'cars/getcardetails' 
    return this.httpClient
    .get<ListResponseModel<CarDetail>>(newPath)

  }
}

