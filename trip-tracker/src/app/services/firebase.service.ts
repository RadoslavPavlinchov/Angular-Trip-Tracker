import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "@angular/fire/database";
import { Observable } from "rxjs";
import { map } from "rxjs/operators"
// import { } from "rxjs/operators/"

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  trips: Observable<any>;
  favoriteTrips: Observable<any[]>;
  upcomingTrips: Observable<any[]>;
  tripDetails: Observable<any>;
  
  constructor(private db: AngularFireDatabase) {

   }

  getTrips() {
    this.trips = this.db.list('/trips').snapshotChanges().pipe(map(trips => {
      return trips.map(a => {
        const data = a.payload.val();
        const key = a.payload.key;
        return { key, data }
      });
    }));
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

   addTrip(tripDetails) {
    let filteredTrips = JSON.parse(JSON.stringify(tripDetails));
    return this.trips.push(filteredTrips);
   }

   updateTrip(id, tripDetails) {
    let filteredTrips = JSON.parse(JSON.stringify(tripDetails));
    return this.trips.update(id, filteredTrips);
   }

   deleteTrip(id) {
    return this.tripDetails.remove(id);
   }

   formatDate(date: Date): string {
     const day = date.getDate();
     const month = date.getMonth() + 1;
     const year = date.getFullYear();

     return `${year}-${month}-${day}`;
   }
   
}
