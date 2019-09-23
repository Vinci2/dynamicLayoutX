import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  {
    path: 'welcome',
    loadChildren: () => import('./modules/welcome-page/welcome-page.module').then(m => m.WelcomePageModule)
  },
  {
    path: 'dashboard-first',
    loadChildren: () => import('./modules/dashboard-first/dashboard-first.module').then(m => m.DashboardFirstModule)
  }
];
