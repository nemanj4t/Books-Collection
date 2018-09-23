import { Book } from './models/book.model';
import { State } from './reducers/book.reducer'


export interface AppState{
  readonly books: State;
}