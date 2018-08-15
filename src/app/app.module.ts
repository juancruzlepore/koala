import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DateSimplifiedViewPipe } from './date-simplified-view.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DateSimplifiedViewPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,
  ],
  exports: [DateSimplifiedViewPipe],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
