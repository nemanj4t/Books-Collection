import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOfBooksComponent } from './table-of-books.component';

describe('TableOfBooksComponent', () => {
  let component: TableOfBooksComponent;
  let fixture: ComponentFixture<TableOfBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableOfBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableOfBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
