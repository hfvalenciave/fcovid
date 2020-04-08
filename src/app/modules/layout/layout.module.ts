import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';



@NgModule({
    declarations: [
        FooterComponent,
        HeaderComponent,
        MainComponent
    ],
    exports: [
        FooterComponent,
        HeaderComponent,
        MainComponent
    ],
    imports: [
        CommonModule
    ]
})
export class LayoutModule { }
