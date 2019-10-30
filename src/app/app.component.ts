import { Component, AfterContentChecked } from '@angular/core';
import { LocalizationService } from './localization.service';

@Component({
  selector: 'app-root',
  template: `
    <ng-container appMessages
      i18n-appMessage="app.message|Application Message Description."
      appMessage="Application Message"
    >
    </ng-container>

   appMessage is "{{ appMessage }}"
  `
})
export class AppComponent implements AfterContentChecked {
  public appMessage: string;

  constructor(private localization: LocalizationService) {
  }

  public ngAfterContentChecked(): void {
    this.appMessage = this.localization.get('appMessage');
  }
}
