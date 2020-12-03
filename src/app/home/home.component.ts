import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['opportunity', 'action', "accountName"];
  dataSource = []
  user: any;

  constructor( private userService: UserService) { this.userService.getCurrentUserState().subscribe(item => console.log(item?.displayName)) }

  

  ngOnInit(): void {
    
    this.userService.getCurrentUser()
   
  }

}
