import { HttpClientModule } from '@angular/common/http';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './modules/layout/layout.module';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        HttpClientModule,
        LayoutModule,
        NgxPageScrollModule,
        ModalModule
        
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
