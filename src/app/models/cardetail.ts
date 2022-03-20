import { CarImage } from "./carImage";

export interface CarDetail{
    carName:string;
    brandName:string;
    colorName:string;
    dailyPrice:number;
    carImages:CarImage[];

}