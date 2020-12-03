import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { AuthService } from '../services/auth/auth.service'
import { OpportunitiesService } from '../services/opportunities/opportunities.service'

@Component({
  selector: 'app-new-opportunity',
  templateUrl: './new-opportunity.component.html',
  styleUrls: ['./new-opportunity.component.scss'],
})
export class NewOpportunityComponent implements OnInit {
  newOpportunityForm: any
  user: any

  constructor(
    private fb: FormBuilder,
    private opportunityService: OpportunitiesService,
    private authService: AuthService,
  ) {
    this.authService.getCurrentUser()
    this.user = this.authService.accountName
  }

  ngOnInit(): void {

    this.newOpportunityForm = this.fb.group({
      opportunityName: ['', Validators.required],
      details: ['', Validators.required],
      accountName: [this.user],
      stage:[""],
      amount:[""]
    })
  }

  save() {
    this.opportunityService.createOpportunity(this.newOpportunityForm.value)
  }
}
