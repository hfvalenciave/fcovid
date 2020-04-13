import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ContactModalComponent } from '../layout/components/contact-modal/contact-modal.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ChallengeService } from './../core/services/challenge/challenge.service';

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

    showModal() {
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

}
