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


@NgModule({
    declarations: [
        FooterComponent,
        HeaderComponent,
        MainComponent,
        SponsorSectionComponent,
        ContactModalComponent
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
        ContactModalComponent
    ]
})
export class LayoutModule { }
