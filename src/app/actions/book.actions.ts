import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Book } from '../models/book.model'

export const LOAD_BOOKS = '[BOOK] load';
export const LOAD_BOOKS_FAIL = '[BOOK] load fail';
export const LOAD_BOOKS_SUCCESS = '[BOOK] load success';

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

export type Actions = loadBooks | loadBooksFail | loadBooksSuccess;