import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  forgetPassword(){

    console.log("Forget Password function called");
  }

   submit(){

    console.log("Sumbit function called");
  }



}
