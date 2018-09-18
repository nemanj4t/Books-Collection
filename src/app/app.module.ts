import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BookComponent } from './components/book/book.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Action } from '@ngrx/store';


import { BooksService } from './services/books.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './reducers/book.reducer';
import { BooksEffects } from './effects/books.effect'


//material
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule, MatSortModule } from '@angular/material';
import { TableOfBooksComponent } from './containers/table-of-books/table-of-books.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    TableOfBooksComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    StoreModule.forRoot({
      books: reducer
    }),
    EffectsModule.forRoot([
      BooksEffects
    ])
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
