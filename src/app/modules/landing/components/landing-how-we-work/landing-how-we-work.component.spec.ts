import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingHowWeWorkComponent } from './landing-how-we-work.component';

describe('LandingHowWeWorkComponent', () => {
  let component: LandingHowWeWorkComponent;
  let fixture: ComponentFixture<LandingHowWeWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingHowWeWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingHowWeWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
