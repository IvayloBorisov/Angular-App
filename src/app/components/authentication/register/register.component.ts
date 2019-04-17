import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

registerForm: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {

    this.registerForm = this.fb.group({

      name: ['', [ Validators.required, Validators.minLength(3), Validators.maxLength(10) ] ],
      email: ['', [ Validators.required, Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/) ] ],
      password: ['', [ Validators.required, Validators.minLength(6), Validators.maxLength(15) ] ],
    });
  }

  register() {

    this.authService.register(this.registerForm.value)
      .subscribe((data) => {
       console.log(data);
       this.router.navigate(['/login']);
    })
   
  }

  get form() {
    return this.registerForm.controls;
  }

}
