import { CHALLENGES } from './challenge.mock';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ChallengeService {

    constructor() { }

    get all() {
        return new Observable(resolve => {
            console.log(CHALLENGES);
            resolve.next(CHALLENGES);
            resolve.complete();
        });
    }

    findById(idChallenge: string) {
        return new Observable(resolve => {
            const challenge = CHALLENGES.find(item => item.id === idChallenge);
            resolve.next(challenge);
            resolve.complete();
        });
    }
}
