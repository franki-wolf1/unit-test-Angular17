// refactor.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { RefactorService } from './refactor.service';

describe('RefactorService', () => {
  let service: RefactorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RefactorService);
  });

  it('should reflect updated signal value after refactor', () => {
    expect(service.getDataSignal()()).toEqual('initialValue');

    service.updateDataSignal('newSignalValue');
    expect(service.getDataSignal()()).toEqual('newSignalValue');
  });
});
