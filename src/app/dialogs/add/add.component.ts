import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatRadioChange } from '@angular/material';
import { TaxDto, TaxModal, SaveTaxDto } from 'src/app/classmodule/tax/tax';
import { TaxService } from 'src/app/modules/tax/tax.service';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { UrlSegment, ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/modules/category/category.service';
import { MenuService } from 'src/app/modules/menu/menu.service';
import { RestaurantService } from 'src/app/modules/restaurant/restaurant.service';
import { DiscountService } from 'src/app/modules/discount/discount.service';
import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  categorySelectedFile: File = null;
  restaurantFilePath: File = null;
  filePath: File = null;
  model: TaxModal;
  router: string;
  isOrderType: boolean;
  isFoodType: boolean;
  orderType: string[] = ['Available', 'Out of Stock'];
  foodType: string[] = ['Vegetarian', 'Non-Vegetarian'];
  foodTypeSelected: string;
  orderTypeSelected: string;
  filter: any;
  groupOptionsSelect: Array<any>;
  showSpinner: boolean = false;
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

  onFileUpload(event) {
    this.categorySelectedFile = <File>event.target.files[0];
    console.log(event); // We just print out data bubbled up from event emitter.
  }

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }

  submit() {
    //this.confirmAdd(form);      
    // emppty stuff            
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public confirmAdd(form: NgForm): void {
    if (this.data && this.data.name) {
      let category = {
        cateogry: {
          name: this.data.name,
          displayName: this.data.displayName
        }
      }      
      this.categoryService.addNewCategory(this.categorySelectedFile, category)
        .subscribe(response => {
          console.log(response);
        });
    }
  }
}
