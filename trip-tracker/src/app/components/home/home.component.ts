import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from "firebase/app";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //favorite trips
  favoriteTrips: any;
  upcomingTrips: any;

  //authentication
  authenticated: boolean = false;
  user: Observable<firebase.User>;
  
  constructor(private firebaseService: FirebaseService, public af: AngularFireAuth) {
    this.af.authState.subscribe((auth) => {
      if (auth != null) {
        this.user = af.authState;
        this.authenticated = true;
      }
    })
  }

  ngOnInit() {
    this.firebaseService.getFavoriteTrips().subscribe(favs => {
      this.favoriteTrips = favs;
    })

    this.firebaseService.getUpcomingTrips().subscribe(ut => {
      this.upcomingTrips = ut;
    })
  }

}
