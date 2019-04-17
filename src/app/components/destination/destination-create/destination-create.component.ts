import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-destination-create',
  templateUrl: './destination-create.component.html',
  styleUrls: ['./destination-create.component.css']
})
export class DestinationCreateComponent implements OnInit {

  destinationCreateForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.destinationCreateForm = this.fb.group({

      location: ['', [ Validators.required, Validators.minLength(3), Validators.maxLength(10) ] ],
      hotel: [ '', [ Validators.required, Validators.minLength(3), Validators.maxLength(10) ] ],
      imageUrl: [ '', Validators.required ],
      description: [ '', [ Validators.required, Validators.minLength(20), Validators.maxLength(300) ] ],
      topSights: [ '', [] ],
    })
  }

  submitCreateForm() {
    console.log(this.destinationCreateForm);
  }

}
