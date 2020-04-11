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

  addNewRestaurant(filePath:File, restaurant: any):  Observable<any> {
    //const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    //const headers = new HttpHeaders({'Content-Type': 'text/uri-list'});
    // let body = JSON.stringify(restaurant);
    // console.log(body);
    debugger
    const formData = new FormData();
    formData.append('file', filePath, filePath.name)    
    // add the data object
    formData.append('data', JSON.stringify(restaurant));
    // let body = new FormData();
    // body.append('file', 'filtepath.txt');
    // body.append('data', JSON.stringify(Category));
    console.log(formData);
    return this.http.post<any>(`${this.url}Resturant/addResturant`, formData);
  }

  getRestaurant(): Observable<RestaurantDto[]>{
    return this.http.get<RestaurantDto[]>(`${this.url}Resturant/resturant`);
  }

}
