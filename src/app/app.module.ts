import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DateSimplifiedViewPipe} from './date-simplified-view.pipe';
import {MoviesComponent} from './movies/movies.component';
import {MatListModule} from '@angular/material';
import { MessageComponent } from './message/message.component';


@NgModule({
  declarations: [
    AppComponent,
    DateSimplifiedViewPipe,
    MoviesComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    MatListModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  exports: [DateSimplifiedViewPipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
