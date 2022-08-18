import { Injectable } from '@angular/core';
import { User } from 'src/@resources/model/user';
import { BaseHttpService } from '../base-http/base-http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseHttpService{

  getUsers(){
    return this.get('/api/users');
  }

  addUser(user:User) {
    return this.post('api/users/add',{...user})
  }

  editUser(id:number,user:User) {
    return this.put(`api/users/${id}`,{...user})
  }

  deleteUser(id:number) {
    return this.delete(`api/users/${id}`)
  }

}
