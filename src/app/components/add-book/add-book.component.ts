import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  rForm: FormGroup;
  post: any;

  @Output() added = new EventEmitter<Book>();
  
  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      'author': [null, Validators.required],
      'title': [null, Validators.required],
      'country': [null, Validators.required],
      'language': [null, Validators.required],
      'link': [null, Validators.required],
      'pages': [null, Validators.required],
      'year': [null, Validators.required],
    })
   }

  ngOnInit() {
  }

  addNewBook(post) {
    console.log(post);
    this.rForm.reset();
    const book: Book = {
      read: false,
      author : post.author,
      title : post.title,
      country : post.country,
      imageLink : "images/the-death-of-ivan-ilyich.jpg",
      language : post.language,
      link : post.link,
      pages : post.pages,
      year : post.year,
      id : Math.floor(Math.random() * 10000).toString()}
      this.added.emit(book);
    }
}
