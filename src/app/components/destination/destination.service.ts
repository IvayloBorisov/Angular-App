import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Destination } from '../shared/models/destination';
import { Observable } from 'rxjs';

const createDestinationUtl = "http://localhost:5000/destination/create";
const allDestinationsUrl = "http://localhost:5000/destination/all";
const destinationDetailsUrl = "http://localhost:5000/destination/details/";
const deleteDestinationUrl = "http://localhost:5000/destination/delete/"

@Injectable({
  providedIn: 'root'
})
export class DestinationService {

  constructor(private http: HttpClient) { }

  createDestination(data) {
    return this.http.post(createDestinationUtl, data);
  }

  getAllDestinations(): Observable<Array<Destination>> {
    return this.http.get<Array<Destination>>(allDestinationsUrl);
  }

  getDestinationDetails(id): Observable<Destination>{
    return this.http.get<Destination>(destinationDetailsUrl + id);
  }

  deleteDestination(id) {
    return this.http.delete(deleteDestinationUrl + id);
  }
}
