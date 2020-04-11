import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
// import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule, MatDividerModule, MatCardModule, MatPaginatorModule, MatTableModule, MatTreeModule, MatDialogModule, MatFormFieldModule, MatButtonModule, MatIconModule, MatToolbarModule, MatInputModule, MatTooltipModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatChipsModule, MatGridListModule, MatProgressBarModule, MatSelectModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { CategoryComponent } from 'src/app/modules/category/category.component';
import { AddComponent } from 'src/app/dialogs/add/add.component';
import { EditComponent } from 'src/app/dialogs/edit/edit.component';
import { DeleteComponent } from 'src/app/dialogs/delete/delete.component';
import { MaterialFileUploadComponent } from 'src/app/material-file-upload/material-file-upload.component';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    CategoryComponent,
    AddComponent,
    EditComponent,
    DeleteComponent,
    MaterialFileUploadComponent
    // PostsComponent
  ],
  entryComponents: [
    AddComponent,
    EditComponent,
    DeleteComponent
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
    MatSelectModule
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
    MaterialFileUploadComponent,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatChipsModule,
    MatGridListModule,
    MatProgressBarModule,
    MatSelectModule
  ],
  providers: [
    DashboardService
  ]
})
export class DefaultModule { }
