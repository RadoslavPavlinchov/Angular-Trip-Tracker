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

  constructor(private firebaseService: FirebaseService, private route: ActivatedRoute, private router: Router) { 

  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.firebaseService.getTripDetails(this.id).subscribe(trip => {
      this.city = trip.city;
      this.creator = trip.creator;
      this.datedepart = trip.datedepart;
      this.datereturn = trip.datereturn;
      this.description = trip.description;
      this.imageUrl = trip.imageUrl;
      this.price = trip.price;
      this.rate = trip.rate;
      this.title = trip.title;
      this.type = trip.type;
    })
  }

}
