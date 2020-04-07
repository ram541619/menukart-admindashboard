import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DiscountDto } from 'src/app/classmodule/discount/discount';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  url = localStorage.getItem('ServerUrl');
  constructor(private http: HttpClient) { }

  addNewDiscount(discount: DiscountDto):  Observable<boolean> {
    console.log(this.url);
    console.log(discount);    
    return this.http.post<boolean>(`${this.url}Discount/addDiscount`, discount);
  }

  getDiscount(): Observable<DiscountDto[]>{
    return this.http.get<DiscountDto[]>(`${this.url}Discount/discount`);
  }
}
