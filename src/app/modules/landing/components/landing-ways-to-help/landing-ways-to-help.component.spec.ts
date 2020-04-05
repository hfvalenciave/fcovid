import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingWaysToHelpComponent } from './landing-ways-to-help.component';

describe('LandingWaysToHelpComponent', () => {
  let component: LandingWaysToHelpComponent;
  let fixture: ComponentFixture<LandingWaysToHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingWaysToHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingWaysToHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
