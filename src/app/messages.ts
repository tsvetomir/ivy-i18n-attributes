import { Input } from '@angular/core';
import { ComponentMessages } from './component.messages';

export class Messages extends ComponentMessages {
    @Input() public appMessage: string;
}
