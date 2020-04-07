import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from './category.service';
import { Category, Categorymodel } from 'src/app/classmodule/category/category';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

const ELEMENT_DATA: Category[] = [
  { id: 1, name: 'Hydrogen', displayName: 'ram', quality: 1, fileName: 'http://13.234.238.30/assets/images/admin_logo.png' }
];

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  model: Category = new Category;
  mainModel: Categorymodel = new Categorymodel;
  categoryList: Category[];
  displayedColumns: string[] = ['id', 'name', 'displayName', 'quality', 'fileName'];
  dataSource: MatTableDataSource<Category>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private categoryService: CategoryService) { 
    
  }

  ngOnInit() {
    const users: Category[] = [];
    this.categoryService.getCategories().subscribe(a => {      
      this.categoryList = a as Category[];           
    })
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }
  getCategoryList(){
    this.categoryService.getCategories().subscribe(a => {      
      this.categoryList = a as Category[];           
    })
  }

}
