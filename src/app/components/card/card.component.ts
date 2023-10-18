import { Component, Input, Output, EventEmitter } from '@angular/core';

import { CurrencyUpdateService } from 'src/app/services/currency-update.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() title: string = '';
  @Input() conversionValue: number = 0;
  @Input() variation: number = 0;
  @Input() lastUpdated: string = '';
  @Input() isLoading: boolean = false;
  @Input() hasError: boolean = false;
  @Output() reload: EventEmitter<void> = new EventEmitter<void>;

  constructor(private currencyUpdateService: CurrencyUpdateService) {}

  reloadCurrency() {
    this.currencyUpdateService.currencyUpdated.emit();
  }

  getVariationColorStyle(variation: number) {
    if (variation <= 1) {
      return { color: 'var(--text-red)' };
    } else if (variation <= 5) {
      return { color: 'var(--text-green)' };
    } else {
      return { color: 'var(--text-blue)' };
    }
  }
}
