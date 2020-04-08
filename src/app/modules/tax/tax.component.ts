import { Component, OnInit, ViewChild } from '@angular/core';
import { TaxDto, TaxModal, SaveTaxDto } from 'src/app/classmodule/tax/tax';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { TaxService } from './tax.service';
import { AddComponent } from 'src/app/dialogs/add/add.component';

@Component({
  selector: 'app-tax',
  templateUrl: './tax.component.html',
  styleUrls: ['./tax.component.scss']
})
export class TaxComponent implements OnInit {

  model: TaxDto = new TaxDto;
  // mainModel: Categorymodel = new Categorymodel;
  taxList: TaxDto[];
  displayedColumns: string[] = ['id', 'taxType', 'orderType', 'displayName', 'taxTitle', 'taxAmount', 'taxDescription', 'actions'];
  dataSource: MatTableDataSource<TaxDto>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  constructor(private taxService: TaxService,
    private dialog: MatDialog) { }

  ngOnInit() {
    const users: TaxDto[] = [];
    this.loadData();
  }

  refresh() {
    this.loadData();
  }

  addNew(issue: SaveTaxDto) {
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

  startEdit(tax: TaxDto) {
    alert('not yet implemented');
  }

  deleteItem(tax: TaxDto) {
    alert('not yet implemented');
  }

  loadData() {
    this.taxService.getTax().subscribe(a => {
      this.taxList = a as TaxDto[];
      console.log(this.taxList);
      this.dataSource = new MatTableDataSource(this.taxList);
      console.log(this.dataSource);
    })
  }
}
