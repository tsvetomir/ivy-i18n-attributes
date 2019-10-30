import { Injectable } from '@angular/core';

@Injectable()
export class LocalizationService {
  private dictionary: Map<string, string> = new Map();

  public get(key: string): string {
    return this.dictionary.get(key);
  }

  public register(key: string, value: string): void {
    if (this.dictionary.has(key)) {
      return;
    }

    this.dictionary.set(key, value);
  }
}
