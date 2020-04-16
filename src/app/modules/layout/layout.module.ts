import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { SponsorSectionComponent } from './components/sponsor-section/sponsor-section.component';
import { ContactModalComponent } from './components/contact-modal/contact-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParticipateModalComponent } from './components/participate-modal/participate-modal.component';
import { ContactTeamModalComponent } from './components/contact-team-modal/contact-team-modal.component';


@NgModule({
    declarations: [
        FooterComponent,
        HeaderComponent,
        MainComponent,
        SponsorSectionComponent,
        ContactModalComponent,
        ParticipateModalComponent,
        ContactTeamModalComponent
    ],
    exports: [
        FooterComponent,
        HeaderComponent,
        MainComponent,
        SponsorSectionComponent,
        ContactModalComponent
    ],
    imports: [
        CommonModule,
        NgxPageScrollModule,
        RouterModule,
        ModalModule.forRoot(),
        ReactiveFormsModule,
        FormsModule,
    ],
    entryComponents: 
    [
        ContactModalComponent,
        ParticipateModalComponent,
        ContactTeamModalComponent
    ]
})
export class LayoutModule { }
