import { Injectable } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root',
})
export class OpportunitiesService {
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

  async getOpportunities(accountName: any){
    const query = await this.firestore.firestore
      .collection("opportunities")
      .where("accountName", "==", accountName )
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            this.opportunities.push(doc.data())  
            console.log(this.opportunities);          
        });
    }).catch(function(error) {
      console.log("Error getting documents: ", error);
    })

 
  }
}
