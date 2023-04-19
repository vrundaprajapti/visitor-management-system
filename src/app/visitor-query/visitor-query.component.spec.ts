import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorQueryComponent } from './visitor-query.component';

describe('VisitorQueryComponent', () => {
  let component: VisitorQueryComponent;
  let fixture: ComponentFixture<VisitorQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorQueryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitorQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
