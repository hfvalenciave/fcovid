import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ContactModalComponent } from '../layout/components/contact-modal/contact-modal.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ChallengeService } from './../core/services/challenge/challenge.service';
import { isNullOrUndefined } from 'util';

@Component({
    selector: 'app-challenge',
    templateUrl: './challenge.component.html',
    styleUrls: ['./challenge.component.scss']
})
export class ChallengeComponent implements OnInit {
    challenge: Observable<any>;
    bsModalRef: BsModalRef;
    constructor(private challegeService: ChallengeService,
                private route: ActivatedRoute,
                private modalService: BsModalService) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            console.log('nano')
            if (!isNullOrUndefined(params.idChallenge)) {
                this.challenge = this.challegeService.findById(params.idChallenge);
            }
        });
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
