// data.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should return expected data (Observable)', () => {
    const expectedData = ['item1', 'item2', 'item3'];
    service.getData().subscribe(data => {
      expect(data).toEqual(expectedData);
    });
  });

  it('should handle async data fetch (Observable)', (done: DoneFn) => {
    service.fetchData().subscribe(data => {
      expect(data).toBe('fetchedData');
      done();
    });
  });
});
