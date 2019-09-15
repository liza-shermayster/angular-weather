import { TestBed } from '@angular/core/testing';

import { FavoritesCityService } from './favorites-city.service';

describe('FavoritesCityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FavoritesCityService = TestBed.get(FavoritesCityService);
    expect(service).toBeTruthy();
  });
});
