import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoreModule } from './../core/core.module';
import { ChallengeRoutingModule } from './challenge-routing.module';
import { ChallengeComponent } from './challenge.component';



@NgModule({
    declarations: [ChallengeComponent],
    imports: [
        ChallengeRoutingModule,
        CommonModule,
        CoreModule
    ]
})
export class ChallengeModule { }
