import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { ChallengeService } from './../core/services/challenge/challenge.service';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

    challenges: Observable<any>;

    constructor(private challengeService: ChallengeService) { }

    ngOnInit() {
        this.challenges = this.challengeService.all;
    }

}
