import { TestBed, inject } from '@angular/core/testing';

import { ForcastService } from './forcast.service';

describe('ForcastService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForcastService]
    });
  });

  it('should be created', inject([ForcastService], (service: ForcastService) => {
    expect(service).toBeTruthy();
  }));
});
