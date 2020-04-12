import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ChallengeService } from './../core/services/challenge/challenge.service';
import { isNullOrUndefined } from 'util';

@Component({
    selector: 'app-challenge',
    templateUrl: './challenge.component.html',
    styleUrls: ['./challenge.component.scss']
})
export class ChallengeComponent implements OnInit {
    challenge: Observable<any>;

    constructor(private challegeService: ChallengeService,
                private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            console.log('nano')
            if (!isNullOrUndefined(params.idChallenge)) {
                this.challenge = this.challegeService.findById(params.idChallenge);
            }
        });
    }

}
