import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { BooksService } from '../../services/books.service';
import { Book } from '../../models/book.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './../../app.state';
import { BooksState } from '../../reducers/book.reducer'

@Component({
  selector: 'app-table-of-books',
  templateUrl: './table-of-books.component.html',
  styleUrls: ['./table-of-books.component.css']
})
export class TableOfBooksComponent implements OnInit {

  displayedColumns: string[] = ['author', 'title', 'country', 'year'];
  dataSource: MatTableDataSource<Book>;
  books: Observable<BooksState>;
  data: Book[];
  //books1: Book[]; testing purpose
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private booksService: BooksService, private store: Store<AppState>) {
    this.books = store.select('books');
  }

  ngOnInit() {
    /*this.booksService.getBooks().subscribe((books) => {
      this.books1 = books;
      console.log(this.books1);
      this.dataSource = new MatTableDataSource(this.books1);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })*/
    this.books.subscribe((booksData) => {
      this.data = booksData.books;
      this.dataSource = new MatTableDataSource(this.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

