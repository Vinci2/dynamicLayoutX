import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHeaderContainerComponent } from './main-header-container.component';

describe('MainHeaderContainerComponent', () => {
  let component: MainHeaderContainerComponent;
  let fixture: ComponentFixture<MainHeaderContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainHeaderContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainHeaderContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
