import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { MainHeaderContainerComponent } from './containers/main-header-container/main-header-container.component';
import { AppNavigationComponent } from './components/app-navigation/app-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderContainerComponent,
    AppNavigationComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
