import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'taskCom';
  registerForm:FormGroup;
  submitted=false;

  constructor(private formbuilder:FormBuilder){ }

  ngOnInit(){
    this.registerForm=this.formbuilder.group({
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(10)]],
            date: ['', Validators.required],
            country: ['', Validators.required]

    });

  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    
    if (this.registerForm.invalid) {
        return;
    }

    alert('REGISTRATION SUCCESS');
}
}
