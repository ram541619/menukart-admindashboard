import { Component, OnInit, ViewChild } from '@angular/core';
import { DiscountDto } from 'src/app/classmodule/discount/discount';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { DiscountService } from './discount.service';
import { AddComponent } from 'src/app/dialogs/add/add.component';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.scss']
})
export class DiscountComponent implements OnInit {
  model: DiscountDto = new DiscountDto;
  // mainModel: Categorymodel = new Categorymodel;
  discountList: DiscountDto[];
  displayedColumns: string[] = ['discountTitle', 'category', 'menu', 'orderType', 'discountType', 'dateDuration', 'actions'];
  dataSource: MatTableDataSource<DiscountDto>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  constructor(private discountService: DiscountService,
    private dialog: MatDialog) { }

  ngOnInit() {
    const users: DiscountDto[] = [];
    this.loadData();
  }

  refresh() {
    this.loadData();
  }

  addNew(issue: DiscountDto) {
    const dialogRef = this.dialog.open(AddComponent, {
      data: { issue: issue }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        // For add we're just pushing a new row inside DataService
        // this.exampleDatabase.dataChange.value.push(this.dataService.getDialogData());
        // this.refreshTable();
      }
    });
  }

  startEdit(tax: DiscountDto) {
    alert('not yet implemented');
  }

  deleteItem(tax: DiscountDto) {
    alert('not yet implemented');
  }

  loadData() {
    this.discountService.getDiscount().subscribe(a => {
      this.discountList = a as DiscountDto[];
      console.log(this.discountList);
      this.dataSource = new MatTableDataSource(this.discountList);
      console.log(this.dataSource);
    })
  }
}
