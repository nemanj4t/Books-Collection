import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { BooksService } from '../../services/books.service';
import { Book } from '../../models/book.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './../../app.state';
import { State } from '../../reducers/book.reducer';
import * as BookActions from '../../actions/book.actions'
import { Dictionary } from '@ngrx/entity';


@Component({
  selector: 'app-table-of-books',
  templateUrl: './table-of-books.component.html',
  styleUrls: ['./table-of-books.component.css']
})
export class TableOfBooksComponent implements OnInit {

  displayedColumns: string[] = ['author', 'title', 'country', 'year', 'img', 'read', 'link'];
  dataSource: MatTableDataSource<Book>; 
  books: Observable<State>; //observable
  data: Dictionary<Book>; //entity
  booksDB: Book[];
  

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private booksService: BooksService, private store: Store<AppState>) {
    this.books = store.select('books');
  }

  ngOnInit() {
    this.fromDbToEntities();
    this.books.subscribe((booksData) => {
      this.data = booksData.entities;
      this.dataSource = new MatTableDataSource(this.fromEntitiesToBooks(this.data));
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
    

    this.store.dispatch(new BookActions.loadBooks());

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  fromEntitiesToBooks(data) {
    var array: Book[] = []
    for (var key in data) {
      array.push(this.data[key]);
    }
    return array;
  }

  fromDbToEntities() {
    /*this.booksService.getBooks().subscribe((books) => {
      books.forEach((book, key)=>{
        book.id = key.toString();
        book.read = false;
        this.store.dispatch(new BookActions.addBook(book));
      });
    })*/
    this.store.dispatch(new BookActions.loadBooks());
  }

  addNewBook(book: Book) {
    this.store.dispatch(new BookActions.addBook(book));
  }

  onCheckboxChange(id: string) {
    this.store.dispatch(new BookActions.changeRead(id));
  }
}

