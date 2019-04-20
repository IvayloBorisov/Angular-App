import { Component, OnInit } from '@angular/core';
import { Destination } from '../../shared/models/destination';
import { DestinationService } from '../../../core/services/destination.service';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-destination-all',
  templateUrl: './destination-all.component.html',
  styleUrls: ['./destination-all.component.css']
})
export class DestinationAllComponent implements OnInit {

   destinationAll$: Observable<Array<Destination>>

  constructor(private destinationService: DestinationService, public authService: AuthService) { }

  ngOnInit() {

     this.destinationAll$ = this.destinationService.getAllDestinations();      
  }

  deleteDestination(id){
    this.destinationService.deleteDestination(id).subscribe((data) => {

      this.destinationAll$ = this.destinationService.getAllDestinations();
    })
    }
    

  
}
