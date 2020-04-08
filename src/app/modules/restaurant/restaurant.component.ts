import { Component, OnInit, ViewChild } from '@angular/core';
import { RestaurantDto } from 'src/app/classmodule/restaurant/restaurant';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { RestaurantService } from './restaurant.service';
import { AddComponent } from 'src/app/dialogs/add/add.component';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {
  model: RestaurantDto = new RestaurantDto;
  // mainModel: Categorymodel = new Categorymodel;
  restaurantList: RestaurantDto[];
  displayedColumns: string[] = ['restaurantLogo', 'restaurantBanner', 'restaurantFoodType', 'restaurantName', 'restaurantEmail', 'restaurantContact', 'actions'];
  dataSource: MatTableDataSource<RestaurantDto>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  constructor(private restaurantService: RestaurantService,
    private dialog: MatDialog) { }

  ngOnInit() {
    const users: RestaurantDto[] = [];
    this.loadData();
  }

  refresh() {
    this.loadData();
  }

  addNew(issue: RestaurantDto) {
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

  startEdit(tax: RestaurantDto) {
    alert('not yet implemented');
  }

  deleteItem(tax: RestaurantDto) {
    alert('not yet implemented');
  }

  loadData() {
    this.restaurantService.getRestaurant().subscribe(a => {
      this.restaurantList = a as RestaurantDto[];
      console.log(this.restaurantList);
      this.dataSource = new MatTableDataSource(this.restaurantList);
      console.log(this.dataSource);
    })
  }

}
