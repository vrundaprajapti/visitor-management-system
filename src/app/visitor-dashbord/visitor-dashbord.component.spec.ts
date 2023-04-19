import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorDashbordComponent } from './visitor-dashbord.component';

describe('VisitorDashbordComponent', () => {
  let component: VisitorDashbordComponent;
  let fixture: ComponentFixture<VisitorDashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorDashbordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitorDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
