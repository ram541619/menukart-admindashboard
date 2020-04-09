import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestaurantDto } from 'src/app/classmodule/restaurant/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  url = localStorage.getItem('ServerUrl');
  constructor(private http: HttpClient) { }

  addNewRestaurant(restaurant: any):  Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    //const headers = new HttpHeaders({'Content-Type': 'text/uri-list'});
    let body = JSON.stringify(restaurant);
    console.log(body);
    return this.http.post<any>(`${this.url}Resturant/addResturant`, body, { headers: headers });
  }

  getRestaurant(): Observable<RestaurantDto[]>{
    return this.http.get<RestaurantDto[]>(`${this.url}Resturant/resturant`);
  }

}
