import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestinationService } from '../destination.service';
import { Destination } from '../../shared/models/destination';

@Component({
  selector: 'app-destination-details',
  templateUrl: './destination-details.component.html',
  styleUrls: ['./destination-details.component.css']
})
export class DestinationDetailsComponent implements OnInit {

destination: Destination;
name:string = "Paris";
  constructor(private route: ActivatedRoute, private destinationService: DestinationService) { }

  ngOnInit() {

    this.route.params.subscribe((data) => {
      let id = data['id'];
      this.destinationService.getDestinationDetails(id).subscribe((data) => {
          this.destination = data;
          console.log(this.destination);
      });
    });
  }

}
