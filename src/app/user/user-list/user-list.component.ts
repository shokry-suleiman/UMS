import { Component, OnInit } from '@angular/core';
import { USER_TYPE } from 'src/@resources/enum/enum';
import { User } from 'src/@resources/model/user';
import { UserService } from 'src/@resources/services/user/user.service';
import { NgDialogAnimationService } from 'ng-dialog-animation';
import { UserAddComponent } from '../user-add/user-add.component';
import { UserEditComponent } from '../user-edit/user-edit.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'username', 'email', 'type', 'actions'];
  dataSource:User[] =[];
  USER_TYPE= USER_TYPE;
  constructor(private userSerice:UserService, public dialog: NgDialogAnimationService) { }

  ngOnInit(): void {
    this.userSerice.getUsers().subscribe((res:any) =>{
      this.dataSource = res
    })
  } 

  addNewUser() {
    const dialogRef = this.dialog.open(UserAddComponent, {
			width: '350px',
			animation: {
				to: 'left',
				incomingOptions: {
					keyframeAnimationOptions: { easing: 'ease-in-out', duration: 500 },
				},
			},
			position: {
				top: '0',
				rowStart: '0',
			},
		});
	
		dialogRef.afterClosed().subscribe((result: any) => {
			if (result) {
        let users = [...this.dataSource];
        this.dataSource = [];
				this.userSerice.addUser(result).subscribe((res:any) =>{
          if(res){
            console.log('res',res)
            users.push(res.user);
            setTimeout(() => this.dataSource=[...users], 0)
          }
        },err =>{
          this.dataSource =[...users]
        })
			}
		});
  }

  editUser(index:number,user:User) {
    const dialogRef = this.dialog.open(UserEditComponent, {
			width: '350px',
			animation: {
				to: 'left',
				incomingOptions: {
					keyframeAnimationOptions: { easing: 'ease-in-out', duration: 500 },
				},
			},
			position: {
				top: '0',
				rowStart: '0',
			},
      data:{user}
		});
	
		dialogRef.afterClosed().subscribe((result: User) => {
			if (result) {
        
        let users = [...this.dataSource];
        this.dataSource = [];
				this.userSerice.editUser(result.id as number,result).subscribe((res:any) =>{
          if(res){
            users[index]=res;
            setTimeout(() => this.dataSource=[...users], 0)
          }
        },err =>{
          this.dataSource =[...users]
        })
			}
		});
  }

  deleteUser(id:number){

  }
}
