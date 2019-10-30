import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppMessagesDirective } from './app-messages.directive';
import { LocalizationService } from './localization.service';


@NgModule({
  declarations: [
    AppComponent,
    AppMessagesDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    LocalizationService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
