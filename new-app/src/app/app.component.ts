import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { ClickmeComponent } from './clickme/clickme.component';

@Component({
  selector: 'app-root',
  standalone: true,                 // Add this line
  imports: [LoginComponent, SignupComponent, ProfileComponent,ClickmeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'new-app';
}
