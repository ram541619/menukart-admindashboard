import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';
  constructor() {
    const serverURL = 'http://13.234.238.30:8080/menukart/menukart/Menu_kart/rest-api/';
    //const serverURL = 'http://localhost:8080/api/';
    localStorage.setItem('ServerUrl', serverURL);
  }
}
