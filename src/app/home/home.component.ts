import { Component, OnInit } from '@angular/core'
import { AuthService } from '../services/auth/auth.service'
import { OpportunitiesService } from '../services/opportunities/opportunities.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = [ 'opportunity',"amount", 'stage', 'accountName']
  dataSource: any[] = []
  user: any
  email: any

  constructor(
    private authService: AuthService,
    private opportunitiesService: OpportunitiesService
  ) {
    this.authService.getCurrentUser()
    this.user = this.authService.accountName
    this.email = this.authService.loggedInUser
  }

  ngOnInit(): void {
    this.authService.getCurrentUser()
    this.user = this.authService.accountName
    this.email = this.authService.loggedInUser
    this.opportunitiesService.getOpportunities(this.user).then(()=>{
      this.dataSource = this.opportunitiesService.opportunities
    })
    
  }
}
