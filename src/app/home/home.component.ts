import { Component, OnInit } from '@angular/core'
import { AuthService } from '../services/auth/auth.service'
import { OpportunitiesService } from '../services/opportunities/opportunities.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  opportunities: any[] = []
  displayedColumns: string[] = ['opportunity', 'amount', 'stage', 'accountName']
  dataSource: any[] = []
  proposalArr: any[] = this.dataSource.filter(
    (item) => item.stage == 'Proposal shared',
  )
  discoveryArr: any[] = this.dataSource.filter(
    (item) => item.stage == 'Discovery',
  )
  negotiationArr: any[] = this.dataSource.filter(
    (item) => item.stage == 'Negotiation',
  )
  user: any
  email: any
  all: boolean = false
  proposal: boolean = false
  discovery: boolean = false
  negotiation: boolean = false

  constructor(
    private authService: AuthService,
    private opportunitiesService: OpportunitiesService,
  ) {
    this.authService.getCurrentUser()
    this.user = this.authService.accountName
    this.email = this.authService.loggedInUser
  }

  getAllOpportunities(): any {
    this.opportunitiesService.getOpportunities().subscribe((opportunities) => {
      this.opportunities = opportunities.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as {}),
        }
      })
    
      this.dataSource = this.opportunities.filter((item) => item.accountName == this.authService.accountName)
   
      this.proposalArr = this.dataSource.filter(
        (item) => item.stage == 'Proposal shared',
      )
      this.discoveryArr = this.dataSource.filter(
        (item) => item.stage == 'Discovery',
      )
      this.negotiationArr = this.dataSource.filter(
        (item) => item.stage == 'Negotiation',
      )
    })
  }

  ngOnInit(): void {
    this.authService.getCurrentUser()
    this.user = this.authService.accountName
    this.email = this.authService.loggedInUser
    this.getAllOpportunities()
    
  }

  viewAll() {
    this.all = true
    this.negotiation = false
    this.proposal = false
    this.discovery = false
  }

  viewNegotiation() {
    this.all = false
    this.negotiation = true
    this.proposal = false
    this.discovery = false
  }

  viewProposal() {
    this.all = false
    this.negotiation = false
    this.proposal = true
    this.discovery = false
  }

  viewDiscovery() {
    this.all = false
    this.negotiation = false
    this.proposal = false
    this.discovery = true
  }
}
