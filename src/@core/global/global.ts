export class Global {
	token: any;
	user: any | null = JSON.parse(localStorage.getItem('user') as any);
}
