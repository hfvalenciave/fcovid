import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { CoreModule } from './../core/core.module';
import { LayoutModule } from './../layout/layout.module';
import { LandingTeamComponent } from './components/landing-team/landing-team.component';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';


@NgModule({
    declarations: [
        LandingComponent,
        LandingTeamComponent
    ],
    imports: [
        CommonModule,
        CoreModule,
        LandingRoutingModule,
        LayoutModule,
        NgxPageScrollModule
    ]
})
export class LandingModule { }
