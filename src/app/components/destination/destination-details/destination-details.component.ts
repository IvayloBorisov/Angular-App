import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestinationService } from '../destination.service';

@Component({
  selector: 'app-destination-details',
  templateUrl: './destination-details.component.html',
  styleUrls: ['./destination-details.component.css']
})
export class DestinationDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private destinationService: DestinationService) { }

  ngOnInit() {

    this.route.params.subscribe((data) => {
      
    })
  }

}
