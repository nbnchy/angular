import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = '';
  displayName = '';

  // Called on each input event to update the name
  getName(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
  }

  // Called when the "Get Value" button is clicked
  showName() {
    this.displayName = this.name;
  }

  // Called when the "Clear" button is clicked
  setName() {
    this.name = '';
    
  }
}
