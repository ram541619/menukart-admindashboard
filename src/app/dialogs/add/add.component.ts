import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TaxDto, TaxModal, SaveTaxDto } from 'src/app/classmodule/tax/tax';
import { TaxService } from 'src/app/modules/tax/tax.service';
import { FormControl, Validators } from '@angular/forms';
import { UrlSegment, ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/modules/category/category.service';
import { MenuService } from 'src/app/modules/menu/menu.service';
import { RestaurantService } from 'src/app/modules/restaurant/restaurant.service';
import { DiscountService } from 'src/app/modules/discount/discount.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  model: TaxModal;
  router: string;
  orderType: string[] = ['Delivery', 'Pick Up'];
  taxType: string[] = ['Forward', 'Backward'];
  constructor(public dialogRef: MatDialogRef<AddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public taxService: TaxService,
    public categoryService: CategoryService,
    public menuService: MenuService,
    public restaurantService: RestaurantService,
    public discountService: DiscountService,
    private _route: Router,
    public activatedRoute: ActivatedRoute) {

    this.router = _route.url;
    console.log(this.router);
  }

  formControl = new FormControl('', [
    Validators.required
  ]);

  ngOnInit() {
    console.log();
  }

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }

  submit() {
    // emppty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public confirmAdd(): void {

    if (this.router === '/discount') {
      let discount = {
        discount: {
          discountTitle: "discountTitle",
          discountOnCateogry: {
            id: 2
          },
          discountOnMenu: {
            id: 2
          },
          orderType: {
            id: 2
          },
          addOn: {
            id: 2
          },
          applicableAmount: 12,
          discountPrice: 24,
          formDate: "2020-03-23",
          toDate: "2020-03-26"
        }
      }
      this.discountService.addNewDiscount(discount)
        .subscribe(response => {
          console.log(response);
        });

    }
    if (this.router === '/restaurant') {
      let restaurant = {
        resturant: {
          name: "Roohani Biryani",
          displayName: "Roohani Biryani",
          foodType: {
            id: 1
          },
          menu: {
            id: 4
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
      this.restaurantService.addNewRestaurant(restaurant)
        .subscribe(response => {
          console.log(response);
        });
    }

    if (this.router === '/menu') {
      let menu = {
        menu:
        {
          name: "name",
          shortCode: "shortCode",
          price: 123,
          description: "description",
          onlineDisplayName: "onlineDisplayName",
          isAvilable: "true",
          cateogry: {
            id: 1
          }
        }
      }
      this.menuService.addNewMenu(menu)
        .subscribe(response => {
          console.log(response);
        });
    }
    if (this.router === '/category') {
      let category = {
        cateogry: {
          name: this.data.name,
          displayName: this.data.displayName
        }
      }
      this.categoryService.addNewCategory(category)
        .subscribe(response => {
          console.log(response);
        });
    }

    if (this.router === '/tax') {
      let tax = {
        tax: {
          taxTitle: this.data.taxTitle,
          displayName: this.data.displayName,
          taxAmount: this.data.taxAmount,
          taxDescription: this.data.displayName,
          taxType: {
            id: 1
          },
          orderType: {
            id: 1
          }
        }
      }
      this.taxService.addNewTax(tax)
        .subscribe(response => {
          console.log(response);
        });
    }
  }

}
