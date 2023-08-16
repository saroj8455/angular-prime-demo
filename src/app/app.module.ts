import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeModule } from './module/prime/prime.module';
import { HomeComponent } from './components/home/home.component';
import { PagenotFoundComponent } from './components/pagenot-found/pagenot-found.component';
import { AboutComponent } from './components/about/about.component';
import { DemoworkComponent } from './components/demowork/demowork.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagenotFoundComponent,
    AboutComponent,
    DemoworkComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    PrimeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
