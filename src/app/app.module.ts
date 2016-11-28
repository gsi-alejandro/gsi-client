/**
 * Created by cervantes on 25/11/16.
 */
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { MdCoreModule, MdUniqueSelectionDispatcher } from '@angular2-material/core';
import { MdTooltipModule } from '@angular2-material/tooltip';
import { MdButtonModule } from '@angular2-material/button';
import { MdListModule } from '@angular2-material/list';
import { MdRadioModule } from '@angular2-material/radio';
import { MdCheckboxModule } from '@angular2-material/checkbox';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MdCoreModule,
        MdTooltipModule,
        MdButtonModule,
        MdListModule,
        MdRadioModule,
        MdCheckboxModule
    ],
    declarations: [
        AppComponent,
    ],
    providers: [MdUniqueSelectionDispatcher],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
