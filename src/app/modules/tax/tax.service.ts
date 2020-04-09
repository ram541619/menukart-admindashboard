import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaxDto, TaxModal } from 'src/app/classmodule/tax/tax';

@Injectable({
  providedIn: 'root'
})


export class TaxService {

  url = localStorage.getItem('ServerUrl');
  constructor(private http: HttpClient) { }
    

  addNewTax(tax: any):  Observable<any> { 
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    //const headers = new HttpHeaders({'Content-Type': 'text/uri-list'});

    //let options = new Request({ headers: headers });
    let body = JSON.stringify(tax);       
    return this.http.post<any>(`${this.url}Tax/addTaxe`, body, {headers: headers});
  }

  getTax(): Observable<TaxDto[]>{
    return this.http.get<TaxDto[]>(`${this.url}Tax/findAllTax`);
  }

}
