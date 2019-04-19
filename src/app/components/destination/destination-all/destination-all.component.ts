import { Component, OnInit } from '@angular/core';
import { Destination } from '../../shared/models/destination';
import { DestinationService } from '../destination.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-destination-all',
  templateUrl: './destination-all.component.html',
  styleUrls: ['./destination-all.component.css']
})
export class DestinationAllComponent implements OnInit {

   destinationAll$: Observable<Array<Destination>>

  constructor(private destinationService: DestinationService) { }

  ngOnInit() {

     this.destinationAll$ = this.destinationService.getAllDestinations();      
  }

  deleteDestination(id){
    this.destinationService.deleteDestination(id).subscribe((data) => {

      this.destinationAll$ = this.destinationService.getAllDestinations();
    })
    }
    

  
}
