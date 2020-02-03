import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "../../services/firebase.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {
  id: any;
  constructor(private firebaseService: FirebaseService, private route: ActivatedRoute, private router: Router) { 

  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.firebaseService.getTripDetails(this.id).subscribe(trip => {
      console.log('trip details ' + JSON.stringify(trip));
    })
  }

}
