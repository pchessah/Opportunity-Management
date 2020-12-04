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
  proposalArr: any[] =this.dataSource.filter((item) => item.stage == "Proposal shared")
  discoveryArr: any[] =this.dataSource.filter((item) => item.stage =="Discovery")
  negotiationArr: any[] =this.dataSource.filter((item) => item.stage == "Negotiation")
  user: any
  email: any
  all: boolean = false;
  proposal: boolean = false;
  discovery: boolean = false;
  negotiation: boolean = false;

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
      this.dataSource = this.opportunitiesService.opportunities;
      this.proposalArr =this.dataSource.filter((item) => item.stage == "Proposal shared")
      this.discoveryArr =this.dataSource.filter((item) => item.stage =="Discovery")
      this.negotiationArr =this.dataSource.filter((item) => item.stage == "Negotiation")
    })
  }

  viewAll(){
    console.log(this.removeDuplicates(this.dataSource));
    this.all = true;
    this.negotiation = false;
    this.proposal = false;
    this.discovery = false;
  }

  viewNegotiation(){
    this.all = false;
    this.negotiation = true;
    this.proposal = false;
    this.discovery = false;
  }

  viewProposal(){
    this.all = false;
    this.negotiation = false;
    this.proposal = true;
    this.discovery = false;
  }

  viewDiscovery(){
    this.all = false;
    this.negotiation = false;
    this.proposal = false;
    this.discovery = true;
  }

  removeDuplicates(arr: any){
    return arr.filter((value: any, index: any) => arr.indexOf(value) === index);
  }

}
