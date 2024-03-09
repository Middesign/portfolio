import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HttpClientModule } from '@angular/common/http';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { LoaderComponent } from './loader/loader.component';
import { PasswordComponent } from './password/password.component';
import { DetailsType01Component } from './details-type01/details-type01.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisableRightClickDirective } from './directive/disable-right-click.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    UnderConstructionComponent,
    AboutComponent,
    FooterComponent,
    LoaderComponent,
    PasswordComponent,
    DetailsType01Component,
    DisableRightClickDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    HttpClientModule,
    NgxUsefulSwiperModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
