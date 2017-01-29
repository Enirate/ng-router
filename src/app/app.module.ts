import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule, routingComponent } from './app.routing';

import { AppComponent } from './app.component';
// import { FirstComponent } from './first/first.component';
// import { SecondComponent } from './second/second.component';
// import { ThirdComponent } from './third/third.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent
    // FirstComponent,
    // SecondComponent,
    // ThirdComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
