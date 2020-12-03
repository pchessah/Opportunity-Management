import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { OpportunitiesService } from '../services/opportunities/opportunities.service';

@Component({
  selector: 'app-new-opportunity',
  templateUrl: './new-opportunity.component.html',
  styleUrls: ['./new-opportunity.component.scss']
})
export class NewOpportunityComponent implements OnInit {

  newOpportunityForm: any;

  constructor( private fb: FormBuilder, private opportunityService: OpportunitiesService) { }

  ngOnInit(): void {
    this.newOpportunityForm = this.fb.group({
      opportunityName: ['', Validators.required],
      details: ['', Validators.required]
    });
  }

  save(){
    console.log(this.newOpportunityForm.value);
  }

}
