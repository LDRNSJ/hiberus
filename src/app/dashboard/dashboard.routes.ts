import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuardService } from '../_services/auth-guard.service';
export const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: LayoutComponent,
    canActivate: [AuthGuardService],
    children: [{ path: '', redirectTo: 'home', pathMatch: 'full' }]
  }
];
