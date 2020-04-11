import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './modules/layout/layout.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        LayoutModule,
        NgxPageScrollModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
