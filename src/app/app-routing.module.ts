import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { CategoryComponent } from './modules/category/category.component';
import { MenuComponent } from './modules/menu/menu.component';
import { RestaurantComponent } from './modules/restaurant/restaurant.component';
import { DiscountComponent } from './modules/discount/discount.component';
import { TaxComponent } from './modules/tax/tax.component';
import { ReportComponent } from './modules/report/report.component';
import { TaxlistComponent } from './modules/tax/taxlist/taxlist.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '*', component: LoginComponent },
  {
    path: '',
    component: DefaultComponent,
    children: [{
      path: '',
      component: DashboardComponent
    }, {
      path: 'category',
      component: CategoryComponent
    }, {
      path: 'menu',
      component: MenuComponent
    }, {
      path: 'restaurant',
      component: RestaurantComponent
    }, {
      path: 'discount',
      component: DiscountComponent
    }, {
      path: 'tax',
      component: TaxComponent
    }, {
      path: 'taxlist',
      component: TaxlistComponent
    }
      , {
      path: 'report',
      component: ReportComponent
    }]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
