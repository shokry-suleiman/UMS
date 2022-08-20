import { Injectable } from '@angular/core';
import { User } from '@resources/model/user';
import { BaseHttpService } from '../base-http/base-http.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseHttpService {
  login(data: User) {
    return this.post('/api/login', { ...data });
  }

  _Authorization(): any {
    return {};
  }
}
