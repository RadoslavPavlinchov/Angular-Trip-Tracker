import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //favorite trips
  favoriteTrips: any;
  upcomingTrips: any;
  
  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getFavoriteTrips().subscribe(favs => {
      this.favoriteTrips = favs;
    })

    this.firebaseService.getUpcomingTrips().subscribe(ut => {
      this.upcomingTrips = ut;
    })
  }

}
