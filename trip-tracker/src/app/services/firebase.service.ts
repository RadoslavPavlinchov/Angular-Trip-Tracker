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
  
  constructor(private db: AngularFireDatabase) {

   }

   getTrips() {
     this.trips = this.db.list('/trips').valueChanges();
     return this.trips;
   }

   getFavoriteTrips() {
    this.favoriteTrips = this.db.list('/trips').valueChanges().pipe(map(trips => {
      const topRatedTrips = trips.filter((item:any) => item.rate > 4);
      return topRatedTrips;
    }))
    return this.favoriteTrips;
   }

   getUpcomingTrips() {
    this.upcomingTrips = this.db.list('/trips').valueChanges().pipe(map(trips => {
      const ut = trips.filter((item:any) => item.datereturn == null);
      return ut;
    }))
    return this.upcomingTrips;
   }
   
}
