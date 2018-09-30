import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './../../app.state';
import { selectAllBooks } from '../../reducers/book.reducer';

@Component({
  selector: 'app-my-reads',
  templateUrl: './my-reads.component.html',
  styleUrls: ['./my-reads.component.css']
})



export class MyReadsComponent implements OnInit {

  books: Observable<Book[]>;
  reads: Book[];

  constructor(private store: Store<AppState>) {
    this.books = store.select(selectAllBooks);
  }

  ngOnInit() {
    this.books.subscribe((booksData) => {
      this.reads = booksData.filter((book) => book.read === true);
    })
  }

}
