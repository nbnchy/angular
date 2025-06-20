import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // ✅ Fixed: use 'styleUrls'
})
export class AppComponent {
  display = true;
  toggleDiv=true;

  hide() {
    this.display = false;
  }

  show() {
    this.display = true;
  }

  toggle() {
    this.display = !this.display;
  }

  toggleTwo(){

    this.toggleDiv=!this.toggleDiv
  }
}
