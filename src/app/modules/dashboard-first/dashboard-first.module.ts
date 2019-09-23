import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { dashboardFirstRoutes } from './dashboard-first.routers';
import { DashboardFirstMainContainerComponent } from './containers/dashboard-first-main-container/dashboard-first-main-container.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [DashboardFirstMainContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardFirstRoutes),
    SharedModule
  ]
})
export class DashboardFirstModule { }
