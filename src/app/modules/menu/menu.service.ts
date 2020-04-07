import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Menu, MenuDto } from 'src/app/classmodule/menu/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  
  url = localStorage.getItem('ServerUrl');
  constructor(private http: HttpClient) { }

  addNewMenu(Menu: MenuDto):  Observable<boolean> {
    console.log(this.url);
    console.log(Menu);    
    return this.http.post<boolean>(`${this.url}Menu/addMenu`, Menu);
  }

  getMenu(): Observable<MenuDto[]>{
    return this.http.get<MenuDto[]>(`${this.url}Menu/findAllMenu`);
  }

}
