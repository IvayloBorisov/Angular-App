import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DestinationService } from '../destination.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-destination-create',
  templateUrl: './destination-create.component.html',
  styleUrls: ['./destination-create.component.css']
})
export class DestinationCreateComponent implements OnInit {

  destinationCreateForm: FormGroup;

  constructor(private fb: FormBuilder,
              private destinationService: DestinationService,
              private router: Router) { }

  ngOnInit() {

    this.destinationCreateForm = this.fb.group({

      location: ['', [ Validators.required, Validators.minLength(3), Validators.maxLength(10) ] ],
      hotel: [ '', [ Validators.required, Validators.minLength(3), Validators.maxLength(10) ] ],
      imageUrl: [ '', [ Validators.required, Validators.pattern(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/) ] ],
      description: [ '', [ Validators.required, Validators.minLength(20), Validators.maxLength(300) ] ],
      topSightsOne: [ '', Validators.pattern(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/) ],
      topSightsTwo: [ '', Validators.pattern(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/) ],
      topSightsThree: [ '', Validators.pattern(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/) ],
    })
  }

  createDestination() {
    this.destinationService.createDestination(this.destinationCreateForm.value)
         .subscribe((data) => {
                 this.router.navigate(['/destination/all']);
         })
  }

  get form() {
    return this.destinationCreateForm.controls;
  }

}
