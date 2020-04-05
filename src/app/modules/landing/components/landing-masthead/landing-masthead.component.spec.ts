import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingMastheadComponent } from './landing-masthead.component';

describe('LandingMastheadComponent', () => {
  let component: LandingMastheadComponent;
  let fixture: ComponentFixture<LandingMastheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingMastheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingMastheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
