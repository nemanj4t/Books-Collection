import { Action } from '@ngrx/store';
import { Book } from './../models/book.model';
import * as BookActions from './../actions/book.actions';
import { BooksService } from './../services/books.service';

/*const initialState: Book = {
    author: "",
    country: "",
    imageLink: "",
    language: "",
    link: "",
    pages: 0,
    title: "",
    year: 0
}*/
export interface BooksState {
    books: Book[];
    loading: boolean;
    loaded: boolean;
}

export const initialState: BooksState = {
    books: [],
    loading: false,
    loaded: false
}

/*booksService.getBooks().subscribe((books) => {
    initialState = books;
});*/

export function reducer(state: BooksState = initialState, action: BookActions.Actions) {

    switch(action.type) {
        case BookActions.LOAD_BOOKS:
            return {
                ...state,
                loading: true,
                loaded: false
            }
        case BookActions.LOAD_BOOKS_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false
            }
        case BookActions.LOAD_BOOKS_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true
            }
        default:
            return state;
    }
}

