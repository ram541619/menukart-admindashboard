import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Categorymodel, Category } from 'src/app/classmodule/category/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url = localStorage.getItem('ServerUrl');
  constructor(private http: HttpClient) { }

  addNewCategory(Category: any):  Observable<any> {
    console.log(this.url);
    console.log(Category);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let body = JSON.stringify(Category);           
    return this.http.post<any>(`${this.url}Category/addCateogry`, body, {headers : headers});    
  }

  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(`${this.url}Category/cateogry`);
  }

}
