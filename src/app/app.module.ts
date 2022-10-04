import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PackagesComponent } from './packages/packages.component';
import { PackageComponent } from './package/package.component';
import { HomeComponent } from './home/home.component';
import { PackageItemComponent } from './package-item/package-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PackagesComponent,
    PackageComponent,
    HomeComponent,
    PackageItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
