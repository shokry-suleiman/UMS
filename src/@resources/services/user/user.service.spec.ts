import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('UserService', () => {
  let service: UserService;
  let httpTestController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpTestController = TestBed.get(HttpTestingController);
    service = TestBed.inject(UserService);
  });

  afterEach(() => {
    httpTestController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('get all users', (done) => {
    const users = [
      {
        id: 1,
        username: 'Danny',
        email: 'danythompson@gmail.com',
        password:
          '$2a$10$HVMbLtiiaUUsaSXoxpFbs.jordxBZ99Yv0ZLDrvZZI21VDyVptw9e',
        userType: 0,
      },
      {
        id: 2,
        username: 'Sheks',
        email: 'shokrysuleiman032@gmail.com',
        password:
          '$2a$10$3wqfEfgjHu2k9yLsImqePOaxIuLNffxFi1RxtB4Ay6ascCbohKXpC',
        userType: 1,
      },
      {
        username: 'john',
        email: 'john@gmail.com',
        password:
          '$2a$10$pc4Ch81mTu.bNFWmKJ.j7OonW4LG1uvlnAU0S73H8ynJcDPcn3v7W',
        userType: 0,
        id: 3,
      },
      {
        email: 'moch@gmail.com',
        password:
          '$2a$10$45rxSZhLOiuGDLdkPjkVy.n.Co38fM0i5QP7NjS.NrbXT1OT8g5p6',
        username: 'moch',
        userType: 1,
        id: 5,
      },
      {
        id: 7,
        username: 'sara',
        email: 'sara@gmail.com',
        password:
          '$2a$10$fbz4/C/hztgjlVFhOCOpO.rp27hzApvdLXNRdOi4ZASe6IXEyl4FW',
        userType: 0,
      },
    ];

    service.getUsers().subscribe((res) => {
      expect(res).toEqual(users);
      done();
    });
    const testRequest = httpTestController.expectOne('/api/users');

    testRequest.flush(users);
  });
});
