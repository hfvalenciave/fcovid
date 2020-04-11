import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LayoutModule } from './../layout/layout.module';
import { LandingTeamComponent } from './components/landing-team/landing-team.component';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';


@NgModule({
  declarations: [
    LandingComponent,
    LandingTeamComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    LayoutModule,
    NgxPageScrollModule
  ]
})
export class LandingModule { }
