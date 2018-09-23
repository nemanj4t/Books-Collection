import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BookComponent } from './components/book/book.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BookInformationComponent } from './components/book-information/book-information.component';
import { MyReadsComponent } from './containers/my-reads/my-reads.component';
import { AddBookComponent } from './components/add-book/add-book.component';

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
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';




const appRoutes: Routes = [
  { path: 'MyReads', component: MyReadsComponent },
  { path: 'books/:id', component: BookInformationComponent },
  { path: 'books', component: TableOfBooksComponent },
  { path: '',
    redirectTo: '/books',
    pathMatch: 'full'
  },
  { path: '**', component: BookComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    TableOfBooksComponent,
    HeaderComponent,
    FooterComponent,
    BookInformationComponent,
    MyReadsComponent,
    AddBookComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatCheckboxModule,
    StoreModule.forRoot({
      books: reducer
    }),
    EffectsModule.forRoot([
      BooksEffects
    ]),
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
