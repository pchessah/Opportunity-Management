import { Injectable } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root',
})
export class OpportunitiesService {
  duplicateOpportunitiesArr: any[] = []
  opportunities: any[] = []
  constructor(private firestore: AngularFirestore, public router: Router) {}

  createOpportunity(opportunity: any) {
    return this.firestore
      .collection('opportunities')
      .add(opportunity)
      .then((result: any) => {
        window.alert(`${opportunity.opportunityName} saved.`)
        this.router.navigate(['/home'])
      })
      .catch((error: any) => {
        window.alert(error.message)
      })
  }


  getOpportunities(){
    return this.firestore.collection("opportunities").snapshotChanges()
  }
}
