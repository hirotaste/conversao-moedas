import { TestBed } from '@angular/core/testing';

import { CurrencyUpdateService } from './currency-update.service';

describe('CurrencyUpdateService', () => {
  let service: CurrencyUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencyUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
