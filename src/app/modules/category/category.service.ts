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

  addNewCategory(filePath: File, Category: any): Observable<any> {
    console.log(this.url);
    console.log(Category);
    //const headers = new HttpHeaders({ 'Content-Type': 'multipart/form-data' });
    //let body = JSON.stringify(Category);     
    const formData = new FormData();
    formData.append('file', filePath, filePath.name)    
    // add the data object
    formData.append('data', JSON.stringify(Category));
    // let body = new FormData();
    // body.append('file', 'filtepath.txt');
    // body.append('data', JSON.stringify(Category));
    console.log(formData);
    return this.http.post<any>(`${this.url}Category/addCateogry`, formData);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.url}Category/cateogry`);
  }

}
