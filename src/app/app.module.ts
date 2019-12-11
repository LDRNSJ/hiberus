import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MaterialModule } from './_material/material.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { OverlayModule } from '@angular/cdk/overlay';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';
import { routes } from './app-routing';
import { AuthService } from './_services/auth.service';
import { InterceptorService } from './_services/interceptor.service';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent, LoginComponent, NotFoundComponent, NavbarComponent, RegisterComponent],
  imports: [
    BrowserModule,
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    OverlayModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    ToastrModule.forRoot(),
    DashboardModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
    AuthService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
