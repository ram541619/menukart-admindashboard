import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaxDto } from 'src/app/classmodule/tax/tax';

@Injectable({
  providedIn: 'root'
})
export class TaxService {

  url = localStorage.getItem('ServerUrl');
  constructor(private http: HttpClient) { }

  addNewTax(tax: TaxDto):  Observable<boolean> {
    console.log(this.url);
    console.log(tax);
    // http://13.234.238.30:8080/menukart/menukart/Menu_kart/rest-api/Category/addCateogry
    return this.http.post<boolean>(`${this.url}Tax/addTaxe`, tax);
  }

  getTax(): Observable<TaxDto[]>{
    return this.http.get<TaxDto[]>(`${this.url}Tax/findAllTax`);
  }

}
