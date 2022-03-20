import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl="https://localhost:44301/uploads/images/"
  constructor(private httpClient:HttpClient) { }

  getCarImage(imagePath:string){
    return this.apiUrl+imagePath
}

}