import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithInfiniteScrollComponent } from './table-with-infinite-scroll.component';

describe('TableWithInfiniteScrollComponent', () => {
  let component: TableWithInfiniteScrollComponent;
  let fixture: ComponentFixture<TableWithInfiniteScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableWithInfiniteScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableWithInfiniteScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
