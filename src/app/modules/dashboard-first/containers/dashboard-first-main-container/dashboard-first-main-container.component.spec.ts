import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFirstMainContainerComponent } from './dashboard-first-main-container.component';

describe('DashboardFirstMainContainerComponent', () => {
  let component: DashboardFirstMainContainerComponent;
  let fixture: ComponentFixture<DashboardFirstMainContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardFirstMainContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFirstMainContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
