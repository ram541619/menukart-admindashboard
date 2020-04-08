import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { LoginComponent } from './components/login/login.component';
// import { CategoryComponent } from './modules/category/category.component';
import { MenuComponent } from './modules/menu/menu.component';
import { RestaurantComponent } from './modules/restaurant/restaurant.component';
import { DiscountComponent } from './modules/discount/discount.component';
import { TaxComponent } from './modules/tax/tax.component';
import { ReportComponent } from './modules/report/report.component';
import { TaxlistComponent } from './modules/tax/taxlist/taxlist.component';
import { CategorylistComponent } from './modules/category/categorylist/categorylist.component';
import { MenulistComponent } from './modules/menu/menulist/menulist.component';
import { RestaurantlistComponent } from './modules/restaurant/restaurantlist/restaurantlist.component';
import { DiscountlistComponent } from './modules/discount/discountlist/discountlist.component';
import { ReportslistComponent } from './modules/reports/reportslist/reportslist.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // CategoryComponent,
    MenuComponent,
    RestaurantComponent,
    DiscountComponent,
    TaxComponent,
    ReportComponent,
    TaxlistComponent,
    CategorylistComponent,
    MenulistComponent,
    RestaurantlistComponent,
    DiscountlistComponent,
    ReportslistComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DefaultModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
