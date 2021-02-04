import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyComponentWrapperComponent } from './components/ReactComponent';
import { MyLibModule } from 'my-lib';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentWrapperComponent
  ],
  imports: [
    BrowserModule,
    MyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
