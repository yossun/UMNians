import { TestBed } from '@angular/core/testing';

import { MyPostService } from './my-post.service';

describe('MyPostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyPostService = TestBed.get(MyPostService);
    expect(service).toBeTruthy();
  });
});
