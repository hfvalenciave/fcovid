import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ContactModalComponent } from '../layout/components/contact-modal/contact-modal.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ChallengeService } from './../core/services/challenge/challenge.service';
import { ParticipateModalComponent } from '../layout/components/participate-modal/participate-modal.component';
import { ContactTeamModalComponent } from '../layout/components/contact-team-modal/contact-team-modal.component';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

    challenges: Observable<any>;
    bsModalRef: BsModalRef;
    constructor(private challengeService: ChallengeService, private modalService: BsModalService) { }


    ngOnInit() {
        this.challenges = this.challengeService.all;
    }

  showModalAnonymous() {
      const initialState = {
        list: [
          'Open a modal with component',
          'Pass your data',
          'Do something else',
          '...'
        ],
        title: 'Modal with component'
      };
      this.bsModalRef = this.modalService.show(ContactModalComponent, {initialState});
      this.bsModalRef.content.closeBtnName = 'Close';
  }

  showModalParticipate() {
    const initialState = {
      list: [
        'Open a modal with component',
        'Pass your data',
        'Do something else',
        '...'
      ],
      title: 'Modal with component'
    };
    this.bsModalRef = this.modalService.show(ParticipateModalComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  showModalAdvisors() {
    const initialState = {
      list: [
        'Open a modal with component',
        'Pass your data',
        'Do something else',
        '...'
      ],
      title: 'Modal with component'
    };
    this.bsModalRef = this.modalService.show(ContactTeamModalComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

}
