import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PackagesComponent } from './packages/packages.component';
import { PackageComponent } from './package/package.component';
import { HomeComponent } from './home/home.component';
import { PackageItemComponent } from './package-item/package-item.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ScrollDirective } from './navbar/scroll.directive';
import { ExtraFitlerComponent } from './extra-fitler/extra-fitler.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PackagesComponent,
    PackageComponent,
    HomeComponent,
    PackageItemComponent,
    FilterComponent,
    HeaderComponent,
    FooterComponent,
    ScrollDirective,
    ExtraFitlerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, CarouselModule,BrowserAnimationsModule,
    BsDatepickerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
