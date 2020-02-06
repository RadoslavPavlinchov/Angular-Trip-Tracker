import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-trip',
  templateUrl: './delete-trip.component.html',
  styleUrls: ['./delete-trip.component.css']
})
export class DeleteTripComponent implements OnInit {

  id;
  tripTitle;
  tripDescription;

  constructor(private firebaseService: FirebaseService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.firebaseService.getTripDetails(this.id).subscribe(trip => {
      this.tripTitle = trip.title;
      this.tripDescription = trip.description;
    }) 
  }

  removeTrip() {
    this.firebaseService.deleteTrip(this.id);
    this.router.navigate([''])
  }
}
