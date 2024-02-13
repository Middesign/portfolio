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

@NgModule({
  declarations: [AppComponent, HeaderComponent, DashboardComponent, UnderConstructionComponent, AboutComponent, FooterComponent, LoaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    HttpClientModule,
    NgxUsefulSwiperModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
