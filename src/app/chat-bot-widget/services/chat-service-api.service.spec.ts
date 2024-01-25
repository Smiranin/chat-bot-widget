import { TestBed } from '@angular/core/testing';

import { ChatServiceApiService } from './chat-service-api.service';

describe('ChatServiceApiService', () => {
  let service: ChatServiceApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatServiceApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
