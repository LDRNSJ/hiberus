import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material';

import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CdkTableModule,
    CdkTreeModule,
    Material.MatAutocompleteModule,
     Material.MatBadgeModule,
     Material.MatBottomSheetModule,
      Material.MatButtonModule,
      Material.MatButtonToggleModule,
       Material.MatCardModule,
       Material.MatCheckboxModule,
       Material.MatChipsModule,
        Material.MatDatepickerModule,
         Material.MatDialogModule,
         Material.MatDividerModule,
         Material.MatExpansionModule,
          Material.MatFormFieldModule,
           Material.MatGridListModule,
           Material.MatIconModule,
           Material.MatInputModule,
           Material.MatListModule,
            Material.MatMenuModule,
            Material.MatNativeDateModule,
             Material.MatPaginatorModule,
             Material.MatProgressBarModule,
             Material.MatProgressSpinnerModule,
              Material.MatRadioModule,
              Material.MatRippleModule,
              Material.MatSelectModule,
              Material.MatSidenavModule,
              Material.MatSlideToggleModule,
               Material.MatSliderModule,
               Material.MatSnackBarModule,
               Material.MatSortModule,
                Material.MatStepperModule,
                Material.MatTableModule,
                 Material.MatTabsModule,
                  Material.MatToolbarModule, Material.MatTooltipModule, Material.MatTreeModule
  ],
  exports: [
    Material.MatAutocompleteModule, Material.MatBadgeModule, Material.MatBottomSheetModule,
     Material.MatButtonModule, Material.MatButtonToggleModule, Material.MatCardModule
     , Material.MatCheckboxModule, Material.MatChipsModule, Material.MatDatepickerModule,
      Material.MatDialogModule, Material.MatDividerModule, Material.MatExpansionModule, Material.MatFormFieldModule, Material.MatGridListModule, Material.MatIconModule, Material.MatInputModule, Material.MatListModule, Material.MatMenuModule, Material.MatNativeDateModule, Material.MatPaginatorModule, Material.MatProgressBarModule, Material.MatProgressSpinnerModule, Material.MatRadioModule, Material.MatRippleModule, Material.MatSelectModule, Material.MatSidenavModule, Material.MatSlideToggleModule, Material.MatSliderModule, Material.MatSnackBarModule, Material.MatSortModule, Material.MatStepperModule, Material.MatTableModule, Material.MatTabsModule, Material.MatToolbarModule, Material.MatTooltipModule, Material.MatTreeModule
  ],
  declarations: []
})
export class MaterialModule { }
