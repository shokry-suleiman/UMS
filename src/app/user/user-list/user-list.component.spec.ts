import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { Global } from '@core/global/global';
import { USER_TYPE } from '@resouces/enum/enum';
import { SharedModule } from '@shared/shared.module';

import { UserListComponent } from './user-list.component';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserListComponent],
      imports: [SharedModule, HttpClientTestingModule, MatDialogModule],
      providers: [Global],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have a column titles', () => {
    expect(component.displayedColumns).toEqual([
      'id',
      'username',
      'type',
      'email',
      'actions',
    ]);
  });

  it('Should have a uset type enum ', () => {
    expect(component.USER_TYPE).toEqual(USER_TYPE);
  });
});
