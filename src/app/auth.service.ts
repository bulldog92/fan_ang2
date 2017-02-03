import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private authorized: boolean;
  constructor() {
      this.authorized = false;
      console.log(this.authorized);
  }
  getAuthStatus(){
      console.log('methtod');
      return this.authorized;
  }

}
