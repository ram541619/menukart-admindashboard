import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Menu, MenuDto } from 'src/app/classmodule/menu/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  url = localStorage.getItem('ServerUrl');
  constructor(private http: HttpClient) { }

  addNewMenu(Menu: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    //const headers = new HttpHeaders({'Content-Type': 'text/uri-list'});
    let body = JSON.stringify(Menu);
    return this.http.post<any>(`${this.url}Menu/addMenu`, body, { headers: headers });
  }

  getMenu(): Observable<MenuDto[]> {
    return this.http.get<MenuDto[]>(`${this.url}Menu/findAllMenu`);
  }

}
