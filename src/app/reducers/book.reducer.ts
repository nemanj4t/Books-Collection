import { Action } from '@ngrx/store';
import { Book } from './../models/book.model';
import * as BookActions from './../actions/book.actions';
import { EntityState, EntityAdapter, createEntityAdapter, Dictionary } from '@ngrx/entity';
import { BooksService } from './../services/books.service';

export const adapter: EntityAdapter<Book> = createEntityAdapter<Book>({
    selectId: (book: Book) => book.id
});

export interface State extends EntityState<Book> {
    loading: boolean;
    loaded: boolean;
}

export const initialState: State = adapter.getInitialState({
    loading: false,
    loaded: false,
});

/*booksService.getBooks().subscribe((books) => {
    initialState = books;
});*/

export function reducer(state: State = initialState, action: BookActions.Actions) {

    switch(action.type) {
        case BookActions.LOAD_BOOKS:
            console.log(state);
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
            action.payload.forEach((book, key)=>{
                book.id = key.toString();
                book.read = false;
                console.log(book);
              })
            return adapter.addMany(action.payload, {...state, loading: false, loaded: true})
        
        case BookActions.ADD_BOOK:
            return adapter.addOne(action.payload, state);
        
        case BookActions.CHANGE_READ:
            state.entities[action.payload].read = !state.entities[action.payload].read 
            return state;  

        default:
            return state;
    }
}

