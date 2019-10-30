import { Directive } from '@angular/core';
import { Messages } from './messages';
import { LocalizationService } from './localization.service';

@Directive({
  selector: '[appMessages]'
})
export class AppMessagesDirective extends Messages {
    constructor(protected service: LocalizationService) {
        super();
    }
}
