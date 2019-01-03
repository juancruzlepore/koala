import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DateSimplifiedViewPipe} from './date-simplified-view.pipe';
import {MoviesComponent} from './movies/movies.component';
import {MatListModule} from '@angular/material';
import {MessageComponent} from './message/message.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { NextDateTrackerComponent } from './next-date-tracker/next-date-tracker.component';
import { AddDateDialogComponent } from './add-date-dialog/add-date-dialog.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DateSimplifiedViewPipe,
    MoviesComponent,
    MessageComponent,
    NextDateTrackerComponent,
    AddDateDialogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    MatListModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
  ],
  providers: [],
  exports: [
    DateSimplifiedViewPipe,
    AddDateDialogComponent,
  ],
  bootstrap: [AppComponent],
  entryComponents: [AddDateDialogComponent]
})
export class AppModule {
}
