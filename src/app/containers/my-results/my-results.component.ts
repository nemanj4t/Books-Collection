import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './../../app.state';
import {  selectAllBooks } from '../../reducers/book.reducer';
import * as BookActions from '../../actions/book.actions'


@Component({
  selector: 'app-my-results',
  templateUrl: './my-results.component.html',
  styleUrls: ['./my-results.component.css']
})
export class MyResultsComponent implements OnInit {

  books: Observable<Book[]>;
  readPages: number;
  allPages: number;
  reads: Book[];
  allBooks: Book[];

  constructor(private store: Store<AppState>) {
    this.books = store.select(selectAllBooks);
  }

  ngOnInit() {
    this.books.subscribe((booksData) => {
      this.allBooks = booksData;
      this.reads = booksData.filter((book) => book.read === true);
      this.allPages = this.pagesAllBooks(this.allBooks);
      this.readPages = this.pagesReadBooks(this.reads);
    })
  }

  pagesAllBooks(array: Book[]) {
    var num: number = 0;
    array.forEach((book) => {
      num += book.pages;
    });
    return num;
  }

  pagesReadBooks(array: Book[]) {
    var num: number = 0;
    array.forEach((book) => {
      if(book.read)
        num += book.pages;
    });
    return num;
  }
}
