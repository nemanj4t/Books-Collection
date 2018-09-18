import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import * as bookActions from '../actions/book.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { BooksService } from '../services/books.service'

@Injectable()
export class BooksEffects {
    constructor(private actions$: Actions, private booksService: BooksService) {
        
    }

    @Effect()
    loadBooks$ = this.actions$.ofType(bookActions.LOAD_BOOKS)
        .pipe(
            switchMap(() => {
                return this.booksService.getBooks()
                    .pipe(
                        map(books => new bookActions.loadBooksSuccess(books)),
                        catchError(error => of(new bookActions.loadBooksFail(error)))
                    );
            })
        );
}