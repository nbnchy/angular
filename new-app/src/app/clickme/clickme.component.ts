import { Component } from '@angular/core';

@Component({
  selector: 'app-clickme',
  imports: [],
  templateUrl: './clickme.component.html',
  styleUrl: './clickme.component.css'
})
export class ClickmeComponent {
clickfn(){
 console.log('function called');
 this.otherfn() 
}
otherfn(){

  console.log('Other function called')
}
}
