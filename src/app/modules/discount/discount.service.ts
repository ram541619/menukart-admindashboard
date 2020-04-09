import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DiscountDto } from 'src/app/classmodule/discount/discount';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  url = localStorage.getItem('ServerUrl');
  constructor(private http: HttpClient) { }

  addNewDiscount(discount: any):  Observable<any> {
    console.log(this.url);
    console.log(discount);   
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    //const headers = new HttpHeaders({'Content-Type': 'text/uri-list'});
    let body = JSON.stringify(discount);
    return this.http.post<any>(`${this.url}Discount/addDiscount`, body, { headers: headers });     
  }

  getDiscount(): Observable<DiscountDto[]>{
    return this.http.get<DiscountDto[]>(`${this.url}Discount/findAllDiscount`);
  }
}
