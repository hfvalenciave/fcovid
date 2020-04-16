import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactTeamModalComponent } from './contact-team-modal.component';

describe('ContactTeamModalComponent', () => {
  let component: ContactTeamModalComponent;
  let fixture: ComponentFixture<ContactTeamModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactTeamModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactTeamModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
