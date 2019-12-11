import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';

import { AuthGuardService } from '../_services/auth-guard.service';
import { dashboardRoutes } from './dashboard.routes';
import { RouterModule } from '@angular/router';
import * as $ from 'jquery';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material';
import { MaterialModule } from '../_material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(dashboardRoutes), MaterialModule, FormsModule, ReactiveFormsModule],
  providers: [AuthGuardService, { provide: MAT_RADIO_DEFAULT_OPTIONS, useValue: { color: 'primary' } }],
  declarations: [LayoutComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule {}
