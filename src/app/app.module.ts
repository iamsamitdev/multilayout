import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Form and Validation
import { ReactiveFormsModule } from '@angular/forms';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Component
import { AppComponent } from './app.component';
import { AboutComponent } from './frontend/about/about.component';
import { ServiceComponent } from './frontend/service/service.component';
import { ContactComponent } from './frontend/contact/contact.component';
import { DashboardComponent } from './backend/dashboard/dashboard.component';
import { SettingComponent } from './backend/setting/setting.component';
import { ProfileComponent } from './backend/profile/profile.component';
import { HomeComponent } from './frontend/home/home.component';
import { FrontendLayoutComponent } from './_layout/frontend-layout/frontend-layout.component';
import { BackendLayoutComponent } from './_layout/backend-layout/backend-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServiceComponent,
    ContactComponent,
    DashboardComponent,
    SettingComponent,
    ProfileComponent,
    HomeComponent,
    FrontendLayoutComponent,
    BackendLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
