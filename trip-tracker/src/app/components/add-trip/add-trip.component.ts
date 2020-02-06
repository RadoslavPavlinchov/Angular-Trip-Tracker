import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.css']
})
export class AddTripComponent implements OnInit {
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

  isReturn: boolean = false;

  constructor(private firebaseService: FirebaseService, private router: Router) { }

  ngOnInit() {
  }

  updateDateDepart(dateDepart) {
    this.datedepart = this.firebaseService.formatDate(dateDepart);
  }

  updateDateReturn(dateReturn) {
    this.datereturn = this.firebaseService.formatDate(dateReturn);
    this.isReturn = true;
  }

  submitAdd() {
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

    this.firebaseService.addTrip(trip);
    this.router.navigate(['trips']);
  }

}
