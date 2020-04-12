import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RestaurantService } from 'src/app/modules/restaurant/restaurant.service';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { MenuService } from 'src/app/modules/menu/menu.service';
import { MenuDto } from 'src/app/classmodule/menu/menu';

@Component({
  selector: 'app-resturant',
  templateUrl: './resturant.component.html',
  styleUrls: ['./resturant.component.scss']
})
export class ResturantComponent implements OnInit {
  restaurantFilePath: File = null;
  menuList: any[];
  foodType: Number;
  constructor(public dialogRef: MatDialogRef<ResturantComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public restaurantService: RestaurantService,
    public menuServices: MenuService) { 
      menuServices.getMenu().subscribe(response=>{
        this.menuList = response;
        console.log(this.menuList);
      });
    }

  formControl = new FormControl('', [
    Validators.required
  ]);

  ngOnInit() {
  }

  submit(form: NgForm) {    
    this.confirmAdd(form);
    // emppty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onFileRestaurantUpload(event){    
    this.restaurantFilePath = <File>event.target.files[0];
  }

  public confirmAdd(form: any): void {
    let restaurant = {
      resturant: {
        name: this.data.name,
        displayName: this.data.name,
        foodType: {
          id: parseInt(form.value.foodType)
        },
        menu: {
          id: parseInt(form.value.menu)
        },
        openClose: [{
          day: "day1",
          openingHour: "9:00",
          openingMin: "30AM",
          closeHour: "10:00",
          closeMin: "30PM"
        }, {
          day: "day1",
          openingHour: "10:00",
          openingMin: "30AM",
          closeHour: "10:00",
          closeMin: "30AM"
        }]
      }
    }
    debugger
    this.restaurantService.addNewRestaurant(this.restaurantFilePath, restaurant)
      .subscribe(response => {
        console.log(response);
      });
   }

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }
}
