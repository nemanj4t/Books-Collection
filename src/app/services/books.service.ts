import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(public http:Http) {
    
  }

  getBooks(){
      return this.http.get('../../assets/db.json')
        .pipe(map(res => res.json()));
  }
}
