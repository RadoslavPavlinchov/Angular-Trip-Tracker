import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "../../services/firebase.service";

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {

  allTrips: any;

  constructor(private firebaseService: FirebaseService) {

  }

  ngOnInit() {
    this.firebaseService.getTrips().subscribe(trips => {
      this.allTrips = trips;
    })
  }

}
