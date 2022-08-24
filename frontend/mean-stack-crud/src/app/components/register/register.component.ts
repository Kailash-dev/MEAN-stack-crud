import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  constructor(private _http:HttpClient) {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      name: new FormControl('',[Validators.required]),
     username: new FormControl('',[Validators.required]),
     phoneNumber: new FormControl('',[Validators.required])
    });
  }
  ngOnInit(): void {

  }

  onSubmit() {
    if(this.registerForm.valid) {
      console.log(this._v());
      this._http.post('http://localhost:4000/register',this.registerForm.value).subscribe(data=>{
        console.log(data)
      })
    }
  }
  _v() {
    return this.registerForm.value;
  }
}
