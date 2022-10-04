import { FormularioModule } from './components/formulario/formulario.module';
import { FormularioComponent } from './components/formulario/formulario.component';
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
import { AboutComponent } from './pages/about/about.component';
import { PortalComponent } from './pages/portal/portal.component';
import { FaleConoscoComponent } from './pages/fale-conosco/fale-conosco.component';
import { EmpreendimentosComponent } from './pages/empreendimentos/empreendimentos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    PortalComponent,
    FaleConoscoComponent,
    EmpreendimentosComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NavModule,
    CarouselModule,
    SlideCarouselModule,
    FormularioModule,
    SlideCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
