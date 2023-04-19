import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryActionComponent } from './query-action.component';

describe('QueryActionComponent', () => {
  let component: QueryActionComponent;
  let fixture: ComponentFixture<QueryActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueryActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
