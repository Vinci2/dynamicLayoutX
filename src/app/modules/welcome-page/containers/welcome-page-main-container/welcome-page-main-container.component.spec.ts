import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomePageMainContainerComponent } from './welcome-page-main-container.component';

describe('WelcomePageMainContainerComponent', () => {
  let component: WelcomePageMainContainerComponent;
  let fixture: ComponentFixture<WelcomePageMainContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomePageMainContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomePageMainContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
