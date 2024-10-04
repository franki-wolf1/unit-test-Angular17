// signal.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { SignalService } from './signal.service';

describe('SignalService', () => {
  let service: SignalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignalService);
  });

  it('should update signal correctly', () => {
    const initialSignal = service.getStateSignal();
    expect(initialSignal()).toEqual('initialState');

    service.updateStateSignal('newState');
    expect(service.getStateSignal()()).toEqual('newState');
  });
});
