import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './../../app.state';
import { State } from '../../reducers/book.reducer';
import * as BookActions from '../../actions/book.actions'
import { Dictionary } from '@ngrx/entity';

@Component({
  selector: 'app-my-results',
  templateUrl: './my-results.component.html',
  styleUrls: ['./my-results.component.css']
})
export class MyResultsComponent implements OnInit {

  books: Observable<State>;
  readPages: number;
  allPages: number;
  reads: Book[];
  allBooks: Book[];
  data: Dictionary<Book>;

  constructor(private store: Store<AppState>) {
    this.books = store.select('books');
  }

  ngOnInit() {
    this.books.subscribe((booksData) => {
      this.data = booksData.entities;
      this.allBooks = this.fromEntitiesToAllBooks(this.data);
      this.reads = this.fromEntitiesToReads(this.fromEntitiesToAllBooks(this.data));
      this.allPages = this.pagesAllBooks(this.allBooks);
      this.readPages = this.pagesReadBooks(this.fromEntitiesToReads(this.data));
    })
  }

  fromEntitiesToReads(data) {
    var array: Book[] = []
    for (var key in data) {
      if (data[key].read)
        array.push(this.data[key]);
    }
    return array;
  }

  fromEntitiesToAllBooks(data) {
    var array: Book[] = []
    for (var key in data) {
      array.push(this.data[key]);
    }
    return array;
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
