import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ResturantComponent } from '../resturant/resturant.component';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { TaxService } from 'src/app/modules/tax/tax.service';

@Component({
  selector: 'app-taxdailog',
  templateUrl: './taxdailog.component.html',
  styleUrls: ['./taxdailog.component.scss']
})
export class TaxdailogComponent implements OnInit {
  checked: number;
  indeterminate: number;
  constructor(public dialogRef: MatDialogRef<ResturantComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private taxService: TaxService) { }

  ngOnInit() {
  }

  formControl = new FormControl('', [
    Validators.required
  ]);


  submit(form: NgForm) {
    this.confirmAdd(form);
    // emppty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public confirmAdd(form: any): void {
    let tax = {
      tax: {
        taxTitle: this.data.taxTitle,
        displayName: this.data.displayName,
        taxAmount: this.data.taxAmount,
        taxDescription: this.data.displayName,
        taxType: {
          id: form.value.taxType
        },
        orderType: {
          id: 1
        }
      }
    }
    console.log(tax);
    this.taxService.addNewTax(tax)
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
