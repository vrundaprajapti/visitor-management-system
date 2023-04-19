import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorOnlineComponent } from './visitor-online.component';

describe('VisitorOnlineComponent', () => {
  let component: VisitorOnlineComponent;
  let fixture: ComponentFixture<VisitorOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorOnlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitorOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
