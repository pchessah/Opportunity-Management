import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOpportunityComponent } from './new-opportunity.component';

describe('NewOpportunityComponent', () => {
  let component: NewOpportunityComponent;
  let fixture: ComponentFixture<NewOpportunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewOpportunityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOpportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
