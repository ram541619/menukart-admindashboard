import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/modules/category/category.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: any = {};
  isInValid: boolean;
  constructor(private categoryService: CategoryService,
    private router: Router,
    private _Activatedroute: ActivatedRoute) { }

  ngOnInit() {
  }

  onSubmit() {
    this.isInValid = false;
    this.categoryService.userLogin(this.model.email, this.model.password)
      .subscribe(
        data => {
          localStorage.setItem('user', JSON.stringify(this.model));
          console.log(data);
          if(data.message == 'Login success'){
            this.router.navigate(['']);
          }
          else{
            this.isInValid = true;
          }          
        },
        error => {
          console.log('Error');          
        });    
  }
}
