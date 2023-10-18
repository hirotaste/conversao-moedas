import { Component } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { shareReplay, switchMap } from 'rxjs/operators';

import { CurrencyData } from 'src/app/models/currency-data';
import { CurrenciesService } from 'src/app/services/currencies.service';
import { CurrencyUpdateService } from 'src/app/services/currency-update.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {
  isLoading: boolean = false;
  hasError: boolean = false;
  firstAccess = true;
  cacheDurationInMinutes = 3;
  cacheDurationInSeconds = this.cacheDurationInMinutes * 60;
  currencies: CurrencyData[] = [];
  currencyCache$: Observable<{ [key: string]: CurrencyData }> = new Observable<{ [key: string]: CurrencyData }>();

  constructor(
    private currencyService: CurrenciesService,
    private currencyUpdateService: CurrencyUpdateService
  ) {}

  ngOnInit() {
    this.updateCurrencyCache();

    this.currencyUpdateService.currencyUpdated.subscribe(() => {
      this.updateCurrencyCache();
    });
  }

  updateCurrencyCache() {;
    this.isLoading = true;

    this.currencyCache$ = timer(0, this.cacheDurationInSeconds * 1000).pipe(
      switchMap(() => this.currencyService.getCurrency()),
      shareReplay(1)
    );

    this.currencyCache$.subscribe({
      next: (data) => {
        this.currencies = Object.values(data);
        console.log(this.currencies);
        this.isLoading = false;
      },
      error: () => {
        this.hasError = true;
        this.isLoading = false;
      }
    });
  }
}
