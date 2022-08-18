import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from 'src/@resources/model/user';

@Injectable({
	providedIn: 'root',
})
export class BaseHttpService {

	constructor(public http: HttpClient) { }

	get(url: string, headers?: any) {
		return this.http.get(`${url}`, {
			headers: new HttpHeaders({
				'Content-Type': 'application/json',
				...this._Authorization(),
				...headers,
			}),
		});
	}

	post(url: string, body: any, headers?: any) {
		return this.http.post(`${url}`, body, {
			headers: new HttpHeaders({
				'Content-Type': 'application/json',	
				...this._Authorization(),
				...headers,
			}),
		});
	}

	put(url: string, body: any, headers?: any) {
		return this.http.put(`${url}`, body, {
			headers: new HttpHeaders({
				'Content-Type': 'application/json',	
				...this._Authorization(),
				...headers,
			}),
		});
	}

	delete(url: string,headers?: any) {
		return this.http.delete(`${url}`,{
			headers: new HttpHeaders({
				'Content-Type': 'application/json',	
				...this._Authorization(),
				...headers,
			}),
		});
	}

	_Authorization() {
		return { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token') as string)}`,
				username: `${(JSON.parse(localStorage.getItem('user') as string) as User).userName}` };
	}
}
