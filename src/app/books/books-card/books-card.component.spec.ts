import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksCardComponent } from './books-card.component';

describe('BooksCardComponent', () => {
  let component: BooksCardComponent;
  let fixture: ComponentFixture<BooksCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
