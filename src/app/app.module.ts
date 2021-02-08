import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyComponentWrapperComponent } from './components/ReactComponent';
// import { MyLibModule } from 'my-lib';
import { HeaderComponent } from './components/angular/header/header.component';
import { HomeComponent } from './components/angular/home/home.component';
import { AppRoutingModule } from './app.routing.module';
import { FooterComponent } from './components/angular/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentWrapperComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    // MyLibModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
