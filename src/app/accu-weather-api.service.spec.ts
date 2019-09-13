import { TestBed } from '@angular/core/testing';

import { AccuWeatherApiService } from './accu-weather-api.service';

describe('AccuWeatherApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccuWeatherApiService = TestBed.get(AccuWeatherApiService);
    expect(service).toBeTruthy();
  });
});
