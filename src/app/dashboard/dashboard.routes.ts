import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AuthGuardService } from '../_services/auth-guard.service';
export const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: UsersComponent,
    canActivate: [AuthGuardService],
    children: [{ path: '', redirectTo: 'home', pathMatch: 'full' }]
  }
];
