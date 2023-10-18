import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { CurrenciesService } from './currencies.service';

describe('CurrenciesService', () => {
  let service: CurrenciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [CurrenciesService],
    });
    service = TestBed.inject(CurrenciesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
