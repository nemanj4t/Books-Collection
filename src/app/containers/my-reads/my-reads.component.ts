import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Book } from '../../models/book.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './../../app.state';
import { State } from '../../reducers/book.reducer';
import * as BookActions from '../../actions/book.actions'
import { Dictionary } from '@ngrx/entity';

@Component({
  selector: 'app-my-reads',
  templateUrl: './my-reads.component.html',
  styleUrls: ['./my-reads.component.css']
})



export class MyReadsComponent implements OnInit {

  books: Observable<State>;
  reads: Book[];
  data: Dictionary<Book>;

  constructor(private booksService: BooksService, private store: Store<AppState>) {
    this.books = store.select('books');
  }

  ngOnInit() {
    this.books.subscribe((booksData) => {
      this.data = booksData.entities;
      this.reads = this.fromEntitiesToReads(this.data);
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
}
