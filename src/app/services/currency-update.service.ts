import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyUpdateService {
  currencyUpdated: EventEmitter<void> = new EventEmitter<void>();
}
