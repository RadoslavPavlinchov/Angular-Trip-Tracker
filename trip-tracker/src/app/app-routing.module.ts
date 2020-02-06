import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TripsComponent } from './components/trips/trips.component';
import { TripComponent } from './components/trip/trip.component';
import { AddTripComponent } from './components/add-trip/add-trip.component';
import { EditTripComponent } from './components/edit-trip/edit-trip.component';
import { DeleteTripComponent } from './components/delete-trip/delete-trip.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'trips', component: TripsComponent},
  {path: 'trip/:id', component: TripComponent},
  {path: 'add-trip', component: AddTripComponent},
  {path: 'edit-trip/:id', component: EditTripComponent},
  {path: 'delete-trip/:id', component: DeleteTripComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
