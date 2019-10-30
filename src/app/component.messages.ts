import { OnChanges, SimpleChanges } from '@angular/core';
import { LocalizationService } from './localization.service';

export class ComponentMessages implements OnChanges {
  protected service: LocalizationService;

  public ngOnChanges(changes: SimpleChanges): void {
    Object.keys(changes).forEach(key => this.service.register(key, this[key]));
  }
}
