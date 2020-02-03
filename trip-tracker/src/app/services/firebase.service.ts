import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "@angular/fire/database";
import { Observable } from "rxjs";
import { map } from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  trips: Observable<any[]>;
  favoriteTrips: Observable<any[]>;
  upcomingTrips: Observable<any[]>;
  tripDetails: Observable<any>;
  
  constructor(private db: AngularFireDatabase) {

   }

   getTrips() {
     this.trips = this.db.list('/trips').valueChanges();
     return this.trips;
   }

   getFavoriteTrips() {
    this.favoriteTrips = this.db.list('/trips').snapshotChanges().pipe(map(trips => {
      return trips.map(a => {
        const data = a.payload.val();
        const key = a.payload.key;
        return { key, data }
      });
    }));
    return this.favoriteTrips;
   }

   getUpcomingTrips() {
    this.upcomingTrips = this.db.list('/trips').snapshotChanges().pipe(map(trips => {
      return trips.map(a => {
        const data = a.payload.val();
        const key = a.payload.key;
        return { key, data }
      });
    }))
    return this.upcomingTrips;
   }

   getTripDetails(id) {
    this.tripDetails = this.db.object('/trips/' + id).valueChanges();
    return this.tripDetails;
   }
   
}
