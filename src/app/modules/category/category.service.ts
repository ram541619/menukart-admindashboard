import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categorymodel, Category } from 'src/app/classmodule/category/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url = localStorage.getItem('ServerUrl');
  constructor(private http: HttpClient) { }

  addNewCategory(Category: any):  Observable<boolean> {
    console.log(this.url);
    console.log(Category);
    // http://13.234.238.30:8080/menukart/menukart/Menu_kart/rest-api/Category/addCateogry
    return this.http.post<boolean>(`${this.url}Category/addCateogry`, JSON.stringify(Category));    
  }

  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(`${this.url}Category/cateogry`);
  }

}
