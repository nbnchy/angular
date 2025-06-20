import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  handleEvent(event: MouseEvent) {
    console.log("Event Type:", event.type);
    console.log("Target Element:", event.target);
  }
}


