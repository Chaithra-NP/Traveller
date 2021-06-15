import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher{
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  
  hide=true;

  constructor(private fb: FormBuilder, private route:ActivatedRoute, private router:Router) {}

  loginForm=this.fb.group({
    UserName:['',Validators.required, Validators.minLength(5)],
    password:['',Validators.required]
  });


  ngOnInit() {
  }
}