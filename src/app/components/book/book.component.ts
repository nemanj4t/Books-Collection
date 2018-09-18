import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Book } from '../../models/book.model'
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books:Book[];
  constructor(private booksService:BooksService) { }

  ngOnInit() {
    this.booksService.getBooks().subscribe((books) => {
      this.books = books;
    })
  }
}
