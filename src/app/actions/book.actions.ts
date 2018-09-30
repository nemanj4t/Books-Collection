import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Book } from '../models/book.model';
import { Update } from '@ngrx/entity';

export const LOAD_BOOKS = '[BOOK] load';
export const LOAD_BOOKS_FAIL = '[BOOK] load fail';
export const LOAD_BOOKS_SUCCESS = '[BOOK] load success';
export const ADD_BOOK = '[BOOK] add book';
export const CHANGE_READ = '[BOOK] change read';
export const DISCARD_FROM_READS = '[BOOK] discard from reads';

export class loadBooks implements Action {
    readonly type = LOAD_BOOKS;
}

export class loadBooksFail implements Action {
    readonly type = LOAD_BOOKS_FAIL;
    constructor(public payload: any){}
}

export class loadBooksSuccess implements Action {
    readonly type = LOAD_BOOKS_SUCCESS;
    constructor(public payload: Book[]){}
}

export class addBook implements Action {
    readonly type = ADD_BOOK;
    constructor(public payload: Book){}
}

export class changeRead implements Action {
    readonly type = CHANGE_READ;
    constructor(public payload: string){}
}

export type Actions 
= loadBooks 
| loadBooksFail 
| loadBooksSuccess 
| addBook 
| changeRead;