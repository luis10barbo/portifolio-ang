import { TestBed } from '@angular/core/testing';

import { ProjetoServiceService } from './projeto-service.service';

describe('ProjetoServiceService', () => {
  let service: ProjetoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjetoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
