import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingActiveChallengesComponent } from './landing-active-challenges.component';

describe('LandingActiveChallengesComponent', () => {
  let component: LandingActiveChallengesComponent;
  let fixture: ComponentFixture<LandingActiveChallengesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingActiveChallengesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingActiveChallengesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
