import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-trip',
  templateUrl: './edit-trip.component.html',
  styleUrls: ['./edit-trip.component.css']
})
export class EditTripComponent implements OnInit {

  id;
  city;
  creator;
  datedepart;
  datereturn;
  description;
  imageUrl;
  price;
  rate;
  title;
  type;

  constructor(private firebaseService: FirebaseService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.firebaseService.getTripDetails(this.id).subscribe(trip => {
      this.city = trip.city;
      this.creator = trip.creator;
      this.datedepart = new Date(trip.datedepart);
      this.datereturn = new Date(trip.datereturn);
      this.description = trip.description;
      this.imageUrl = trip.imageUrl;
      this.price = trip.price;
      this.rate = trip.rate;
      this.title = trip.title;
      this.type = trip.type;
    })
  }

  updateDateDepart(date) {
    this.datedepart = this.firebaseService.formatDate(date);
  }

  updateDateReturn(date) {
    this.datedepart = this.firebaseService.formatDate(date);
  }

  submitEdit() {
    let trip = {
      city: this.city,
      creator: this.creator,
      datedepart: this.datedepart,
      datereturn: this.datereturn,
      description: this.description,
      imageUrl: this.imageUrl,
      price: this.price,
      rate: this.rate,
      title: this.title,
      type: this.type
    }

    this.firebaseService.updateTrip(this.id, trip);
    this.router.navigate(['/trips']);
  }

}
