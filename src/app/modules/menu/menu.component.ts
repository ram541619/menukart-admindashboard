import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { MenuService } from './menu.service';
import { MenuDto } from 'src/app/classmodule/menu/menu';
import { AddComponent } from 'src/app/dialogs/add/add.component';
import { MenudailogComponent } from 'src/app/dialogs/menudailog/menudailog.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  model: MenuDto = new MenuDto;
  // mainModel: Categorymodel = new Categorymodel;
  taxList: MenuDto[];
  displayedColumns: string[] = ['menuLogo', 'menuStatus', 'menuFoodType', 'menuName', 'menuCategory', 'menuShortCode', 'actions'];
  dataSource: MatTableDataSource<MenuDto>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  constructor(private menuService: MenuService,
    private dialog: MatDialog) { }

  ngOnInit() {
    const users: MenuDto[] = [];
    this.loadData();
  }

  refresh() {
    this.loadData();
  }

  addNew(issue: MenuDto) {
    const dialogRef = this.dialog.open(MenudailogComponent, {
      data: { issue: issue }, width: '60%'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        // For add we're just pushing a new row inside DataService
        // this.exampleDatabase.dataChange.value.push(this.dataService.getDialogData());
        // this.refreshTable();
        this.loadData();
        this.refreshTable();
      }
    });
  }

  private refreshTable() {
    this.paginator._changePageSize(this.paginator.pageSize);
  }

  startEdit(tax: MenuDto) {
    alert('not yet implemented');
  }

  deleteItem(tax: MenuDto) {
    alert('not yet implemented');
  }

  loadData() {
    this.menuService.getMenu().subscribe(a => {
      this.taxList = a as MenuDto[];
      console.log(this.taxList);
      this.dataSource = new MatTableDataSource(this.taxList);
      console.log(this.dataSource);
    })
  }
}
