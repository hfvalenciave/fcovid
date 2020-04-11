import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { SponsorSectionComponent } from './components/sponsor-section/sponsor-section.component';



@NgModule({
    declarations: [
        FooterComponent,
        HeaderComponent,
        MainComponent,
        SponsorSectionComponent
    ],
    exports: [
        FooterComponent,
        HeaderComponent,
        MainComponent,
        SponsorSectionComponent
    ],
    imports: [
        CommonModule,
        NgxPageScrollModule,
        RouterModule
    ]
})
export class LayoutModule { }
