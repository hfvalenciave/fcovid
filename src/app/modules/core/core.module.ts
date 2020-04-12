import { ChallengeService } from './services/challenge/challenge.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
    declarations: [],
    exports: [
        ChallengeService
    ],
    imports: [
        CommonModule
    ]
})
export class CoreModule { }
