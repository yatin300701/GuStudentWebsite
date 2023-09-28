import { Component } from '@angular/core';
import { UserService } from '../shared-service/userService';

@Component({
  selector: 'app-sign-in-component',
  templateUrl: './sign-in-component.component.html',
  styleUrls: ['./sign-in-component.component.scss']
})
export class SignInComponentComponent {

  // Sign in with Google
  constructor(public authService: UserService){
    
  }
}
