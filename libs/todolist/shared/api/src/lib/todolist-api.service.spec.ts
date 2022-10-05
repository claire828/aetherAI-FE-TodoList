import { TestBed } from '@angular/core/testing';

import { TodolistApiService } from './todolist-api.service';

describe('TodolistApiService', () => {
  let service: TodolistApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodolistApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
