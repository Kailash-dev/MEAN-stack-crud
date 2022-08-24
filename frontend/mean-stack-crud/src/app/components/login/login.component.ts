import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private _http:HttpClient) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }
  ngOnInit(): void {

  }

  onSubmit() {
    if(this.loginForm.valid) {
      console.log(this._v());
      this._http.post('http://localhost:4000/login',this.loginForm.value).subscribe(data=>{
        console.log(data)
      })
    }
  }
  _v() {
    return this.loginForm.value;
  }
}
