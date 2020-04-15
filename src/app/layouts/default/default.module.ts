import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
// import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule, MatDividerModule, MatCardModule, MatPaginatorModule, MatTableModule, MatTreeModule, MatDialogModule, MatFormFieldModule, MatButtonModule, MatIconModule, MatToolbarModule, MatInputModule, MatTooltipModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatChipsModule, MatGridListModule, MatProgressBarModule, MatSelectModule, MatCheckboxModule, MatSortModule, MatProgressSpinnerModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { CategoryComponent } from 'src/app/modules/category/category.component';
import { AddComponent } from 'src/app/dialogs/add/add.component';
import { EditComponent } from 'src/app/dialogs/edit/edit.component';
import { DeleteComponent } from 'src/app/dialogs/delete/delete.component';
import { MaterialFileUploadComponent } from 'src/app/material-file-upload/material-file-upload.component';
import { ResturantComponent } from 'src/app/dialogs/resturant/resturant.component';
import { TaxdailogComponent } from 'src/app/dialogs/taxdailog/taxdailog.component';
import { MenudailogComponent } from 'src/app/dialogs/menudailog/menudailog.component';
import { DiscountdailogComponent } from 'src/app/dialogs/discountdailog/discountdailog.component';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    CategoryComponent,
    AddComponent,
    EditComponent,
    DeleteComponent,
    ResturantComponent,
    MaterialFileUploadComponent,
    MenudailogComponent,
    DiscountdailogComponent,
    TaxdailogComponent
    // PostsComponent
  ],
  entryComponents: [
    AddComponent,
    EditComponent,
    DeleteComponent,
    ResturantComponent,
    MenudailogComponent,
    DiscountdailogComponent,
    TaxdailogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatTreeModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatChipsModule,
    MatGridListModule,
    MatProgressBarModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSortModule,
    MatProgressSpinnerModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatTreeModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    AddComponent,
    EditComponent,
    DeleteComponent,
    ResturantComponent,
    MaterialFileUploadComponent,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatChipsModule,
    MatGridListModule,
    MatProgressBarModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MenudailogComponent,
    DiscountdailogComponent,
    TaxdailogComponent
  ],
  providers: [
    DashboardService
  ]
})
export class DefaultModule { }
