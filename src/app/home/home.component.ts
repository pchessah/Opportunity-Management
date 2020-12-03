import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
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

  constructor( private authService: AuthService, private userService: UserService) { }

  

  ngOnInit(): void {
    this.user = (this.authService.accountName); 
   
  }

}
