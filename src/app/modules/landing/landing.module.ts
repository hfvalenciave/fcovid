import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { LandingNavigationComponent } from './components/landing-navigation/landing-navigation.component';
import { LandingMastheadComponent } from './components/landing-masthead/landing-masthead.component';
import { LandingWaysToHelpComponent } from './components/landing-ways-to-help/landing-ways-to-help.component';
import { LandingHowWeWorkComponent } from './components/landing-how-we-work/landing-how-we-work.component';
import { LandingActiveChallengesComponent } from './components/landing-active-challenges/landing-active-challenges.component';
import { LandingFooterComponent } from './components/landing-footer/landing-footer.component';
import { LandingTeamComponent } from './components/landing-team/landing-team.component';


@NgModule({
  declarations: [
    LandingComponent,
    LandingNavigationComponent,
    LandingMastheadComponent,
    LandingWaysToHelpComponent,
    LandingHowWeWorkComponent,
    LandingActiveChallengesComponent,
    LandingFooterComponent,
    LandingTeamComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
