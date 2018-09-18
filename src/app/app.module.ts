import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BookComponent } from './components/book/book.component';
import { Action } from '@ngrx/store';

import { BooksService } from './services/books.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/book.reducer';


//material
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule, MatSortModule } from '@angular/material';
import { TableOfBooksComponent } from './containers/table-of-books/table-of-books.component';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    TableOfBooksComponent
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
    StoreModule.forRoot({
      books: reducer
    })
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
