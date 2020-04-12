import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { MenuService } from 'src/app/modules/menu/menu.service';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { CategoryService } from 'src/app/modules/category/category.service';
import { Category } from 'src/app/classmodule/category/category';

@Component({
  selector: 'app-menudailog',
  templateUrl: './menudailog.component.html',
  styleUrls: ['./menudailog.component.scss']
})
export class MenudailogComponent implements OnInit {
  restaurantFilePath: File = null;
  categoryList: Category[];
  foodType: Number;
  constructor(public dialogRef: MatDialogRef<MenudailogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public menuService: MenuService,
    public categoryService: CategoryService) { 
      categoryService.getCategories().subscribe(response=>{
        this.categoryList = response;
        console.log(this.categoryList);
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
  onFileRestaurantUpload(event){    
    this.restaurantFilePath = <File>event.target.files[0];
  }
  public confirmAdd(form: any): void {
    let menu = {
      menu:
      {
        name: this.data.name,
        shortCode: this.data.shortCode,
        price: parseInt(this.data.menuPrice),
        description: this.data.description,
        onlineDisplayName: this.data.displayName,
        isAvilable: form.value.status,
        cateogry: {
          id: parseInt(form.value.category)
        }
      }
    }
    console.log(menu);
    this.menuService.addNewMenu(menu)
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
