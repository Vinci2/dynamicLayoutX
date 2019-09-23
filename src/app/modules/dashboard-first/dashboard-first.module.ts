import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { dashboardFirstRoutes } from './dashboard-first.routers';
import { DashboardFirstMainContainerComponent } from './containers/dashboard-first-main-container/dashboard-first-main-container.component';



@NgModule({
  declarations: [DashboardFirstMainContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardFirstRoutes)
  ]
})
export class DashboardFirstModule { }
