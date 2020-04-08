import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TaxDto, TaxModal, SaveTaxDto } from 'src/app/classmodule/tax/tax';
import { TaxService } from 'src/app/modules/tax/tax.service';
import { FormControl, Validators } from '@angular/forms';
import { UrlSegment, ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/modules/category/category.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  model: TaxModal;
  constructor(public dialogRef: MatDialogRef<AddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SaveTaxDto,
    public dataService: CategoryService,
    public route: ActivatedRoute) { }
  formControl = new FormControl('', [
    Validators.required
  ]);

  ngOnInit() {
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

    //http://13.233.0.160:8080/menukart/menukart/Menu_kart/rest-api/Tax/addTaxe
    // {
    // "tax":
    // {
    // "taxTitle":"taxTitle",
    // "displayName":"displayName",
    // "taxAmount":123.00,
    // "taxDescription":"taxDescription",

    // "taxType":{
    // 	"id":1
    // },
    // "orderType":{
    // 	"id":1
    // }
    // }
    // }    

    debugger
    let tax = {
      tax: {
        taxTitle: this.data.taxTitle,
        displayName: 'taxCollection',
        taxAmount: 1212,
        taxDescription: 'descriptive Way from',
        taxType: {
          id: 3
        },
        orderType: {
          id: 3
        }
      }
    }

    let category = {
      cateogry: {
        name: "RamLal",
        displayName: "Jammer"
      }
    }
    let url = this.getRoutes();    
    //this.model.tax = tax;    
    this.dataService.addNewCategory(category);
  }

  getRoutes() { const segments: UrlSegment[] = this.route.snapshot.url; }

}
