import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from './category.service';
import { Category, Categorymodel } from 'src/app/classmodule/category/category';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { AddComponent } from 'src/app/dialogs/add/add.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  model: Category = new Category;
  mainModel: Categorymodel = new Categorymodel;
  showSpinner: boolean = false;
  modeName: string = 'indeterminate';
  categoryList: Category[];
  displayedColumns: string[] = ['name', 'displayName', 'fileName', 'actions'];
  dataSource: MatTableDataSource<Category>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private categoryService: CategoryService,
    private dialog: MatDialog) {

  }

  ngOnInit() {
    const users: Category[] = [];
    this.loadData();
  }
  refresh() {
    //this.showSpinner = false;
    this.modeName = 'indeterminate';
    this.loadData();
  }

  addNew(issue: Category) {
    this.showSpinner = false;
    const dialogRef = this.dialog.open(AddComponent, {
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
      else{
        this.showSpinner = true;
      }           
    });    
  }
  private refreshTable() {
    this.paginator._changePageSize(this.paginator.pageSize);
  }
  startEdit(tax: Category) {
    alert('not yet implemented');
  }

  deleteItem(tax: Category) {
    alert('not yet implemented');
  }

  loadData() {
    this.showSpinner = true;
      setTimeout(() => {
        this.categoryService.getCategories().subscribe(a => {
          this.categoryList = a as Category[];
          console.log(this.categoryList);
          this.dataSource = new MatTableDataSource(this.categoryList);
          console.log(this.dataSource);  
          this.showSpinner = false;      
        })        
      }, 10000);    
  }

}
