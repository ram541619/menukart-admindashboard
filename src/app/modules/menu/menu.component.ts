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
  displayedColumns: string[] = ['menuLogo', 'avilable', 'foodType', 'onlineDisplayName', 'cateogry', 'shortCode', 'actions'];
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
      this.dataSource.sort = this.sort;    
      //pagination
      setTimeout(()=> this.dataSource.paginator = this.paginator);
      this.dataSource.sortingDataAccessor = (data: any, sortHeaderId: string): any => {
        if (typeof data[sortHeaderId] === 'string') {        
            return data[sortHeaderId].toLocaleLowerCase();          
        }
        return data[sortHeaderId];
      };
    })    
  }

  //filter start
public searchOptions = [	
  { "id": 1, "name": "Status" },
  { "id": 2, "name": "Menu Food Type" },
  { "id": 3, "name": "Menu Name" },
  { "id": 4, "name": "Category" },
  { "id": 5, "name": "Menu Short Code" },
]
public selectedoption = -1;
searchText: string;
  // search elements in table .
	public doFilter(selectedVal: number, filterValue: string) {    
		if (filterValue && filterValue.trim() != "" && filterValue != null && filterValue != undefined) {
			this.filterDataSource(selectedVal, filterValue);
		}
		else if ((filterValue && filterValue.trim() == "") || filterValue == "" || filterValue == null || filterValue == undefined) {
			this.searchText = "";
			this.filterDataSource(this.selectedoption, this.searchText);
		}
  }

  
	omit_special_char(event) {
		let inputData = event.srcElement.value;
		let maxAllow = 0;
		if (inputData != undefined && inputData != '') {
			if (inputData[inputData.length - 1] == event.key && event.key == '*') {
				return false;
			}
			for (let i = 0; i < inputData.length; i++) {
				if (inputData[i] == '*') {
					maxAllow += 1;
					if (maxAllow == 2 && event.key == '*') {
						return false;
					}
				}

			}
		}
	}
  
 filterDataSource(selectedVal: number, filterValue: string) {
		// if (filterValue.indexOf('*') == -1) {
		// 	filterValue += '*';
		// }
		this.dataSource.filterPredicate = (data: any, filter: any) => {
			if (selectedVal == 1) {
        if ((data.avilable? 'avilable': 'out of stock').search(filterValue.toLowerCase()) != -1) {
					return data.avilable? 'avilable': 'Out Of Stock';
				}
			}
			else if (selectedVal == 2) {
				if ((data.foodType ? data.foodType.toLowerCase():"").search(filterValue.toLowerCase()) != -1) {
					return data.foodType;
				}
			}
			else if (selectedVal == 3) {
          if((data.onlineDisplayName ?data.onlineDisplayName.toLowerCase(): "").toLowerCase().search(filterValue.toLowerCase()) != -1){
					return data.onlineDisplayName;
				}
			}

			else if (selectedVal == 4) {
				if ((data.cateogry ? data.cateogry.displayName.toLowerCase() : "").toLowerCase().search(filterValue.toLowerCase()) != -1) {
					return data.cateogry ? data.cateogry.displayName : data.cateogry ;
				}
			}

			else if (selectedVal == 5) {
				if ((data.shortCode ?data.shortCode.toLowerCase() : "").toLowerCase().search(filterValue.toLowerCase()) !=-1) {
					return data.shortCode;
				}
			}
		}
		this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //Validates the wild card search. 
	validateWildCardType(str, rule) {
		var escapeRegex = (str) => str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
		return new RegExp("^" + rule.split("*").map(escapeRegex).join(".*") + "$").test(str);
	}
  

//filter end

}
