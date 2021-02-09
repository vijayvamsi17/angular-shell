import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyComponentWrapperComponent } from './components/ReactComponent';
// import { MyLibModule } from 'my-lib';
import { HeaderComponent } from './components/angular/header/header.component';
import { HomeComponent } from './components/angular/home/home.component';
import { AppRoutingModule } from './app.routing.module';
import { FooterComponent } from './components/angular/footer/footer.component';
import { ReactAppComponent } from './components/angular/react-app-component/react-app-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentWrapperComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ReactAppComponent
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
