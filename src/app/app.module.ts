import { NavModule } from './components/nav/nav.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from './components/carousel/carousel.module';
import { SlideCarouselModule } from './components/slideCarousel/slideCarousel.module';
import { HomeComponent } from './pages/home/home.component';
import { SlideCardModule } from './components/slideCard/slideCard.module';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NavModule,
    CarouselModule,
    SlideCarouselModule,
    SlideCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
