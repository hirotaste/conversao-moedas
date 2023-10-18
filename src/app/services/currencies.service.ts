import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CurrencyData } from 'src/app/models/currency-data';

@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {
  private apiUrl = 'https://economia.awesomeapi.com.br/last/';
  private currencies = 'CAD-BRL,ARS-BRL,GBP-BRL';


  constructor(private http: HttpClient) {}

  getCurrency(): Observable<{ [key: string]: CurrencyData }> {
    return this.http.get<{ [key: string]: CurrencyData }>(`${this.apiUrl}${this.currencies}`);
  }
}
