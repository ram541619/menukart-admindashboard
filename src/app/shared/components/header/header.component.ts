import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: any;

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() { }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

  onLogout(){
    localStorage.removeItem('user');
    this.user = (localStorage.getItem('user') == 'undefined') ? null : JSON.parse(localStorage.getItem('user'));
    //this.isLogged = this.user != null;
    //window.location.reload();
    //});
    this.router.navigate(['/login']);
  }

}
