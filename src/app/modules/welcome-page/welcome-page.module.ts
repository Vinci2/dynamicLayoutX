import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomePageMainContainerComponent } from './containers/welcome-page-main-container/welcome-page-main-container.component';
import { RouterModule } from '@angular/router';
import { welcomePageRoutes } from './welcome-page.routes';



@NgModule({
  declarations: [WelcomePageMainContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(welcomePageRoutes)
  ]
})
export class WelcomePageModule { }
