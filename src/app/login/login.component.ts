import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  providers:[AuthService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public model={
    login: "",
    pass:""
  };
  constructor(private auth : AuthService){
    auth.getAuthStatus();
  }
  onSubmit(){
    console.log('sent');
  }

}
