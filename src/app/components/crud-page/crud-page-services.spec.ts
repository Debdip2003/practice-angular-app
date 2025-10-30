import { TestBed } from '@angular/core/testing';

import { CrudPageServices } from './crud-page-services';

describe('CrudPageServices', () => {
  let service: CrudPageServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudPageServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
