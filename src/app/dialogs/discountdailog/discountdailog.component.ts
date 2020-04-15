import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MenudailogComponent } from '../menudailog/menudailog.component';
import { MenuService } from 'src/app/modules/menu/menu.service';
import { CategoryService } from 'src/app/modules/category/category.service';
import { DiscountService } from 'src/app/modules/discount/discount.service';
import { FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-discountdailog',
  templateUrl: './discountdailog.component.html',
  styleUrls: ['./discountdailog.component.scss']
})
export class DiscountdailogComponent implements OnInit {
  menuList: any[];
  categoryList: any[];
  checked = false;
  indeterminate = false;

  constructor(public dialogRef: MatDialogRef<MenudailogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public menuService: MenuService,
    public categoryService: CategoryService,
    public discountService: DiscountService) {
    categoryService.getCategories().subscribe(res => {
      this.menuList = res
    });
    menuService.getMenu().subscribe(menures => {
      this.categoryList = menures
    });
  }

  formControl = new FormControl('', [
    Validators.required
  ]);

  ngOnInit() {
  }
  submit(form: NgForm) {
    debugger
    console.log(form.value);
    this.confirmAdd(form);
    // emppty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public confirmAdd(form: any): void {
    debugger
    let discount = {
      discount: {
        discountTitle: this.data.name,
        discountOnCateogry: {
          id: parseInt(form.value.category)
        },
        discountOnMenu: {
          id: parseInt(form.value.menu)
        },
        orderType: {
          id: 2
        },
        addOn: {
          id: form.value.addOn
        },
        applicableAmount: this.data.applicationAmount,
        discountPrice: this.data.discountPrice,
        formDate: "2020-03-23",
        toDate: "2020-03-26"
      }
    }
    this.discountService.addNewDiscount(discount)
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
