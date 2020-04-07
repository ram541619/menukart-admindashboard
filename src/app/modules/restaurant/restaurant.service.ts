import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestaurantDto } from 'src/app/classmodule/restaurant/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  url = localStorage.getItem('ServerUrl');
  constructor(private http: HttpClient) { }

  addNewRestaurant(restaurant: RestaurantDto):  Observable<boolean> {
    console.log(this.url);
    console.log(restaurant);    
    return this.http.post<boolean>(`${this.url}Menu/addRestaurant`, restaurant);
  }

  getRestaurant(): Observable<RestaurantDto[]>{
    return this.http.get<RestaurantDto[]>(`${this.url}Restaurant/restaurant`);
  }

}
