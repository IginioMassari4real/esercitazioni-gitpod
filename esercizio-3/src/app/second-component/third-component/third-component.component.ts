import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-third-component',
  standalone: true,
  imports: [MatProgressBarModule],
  templateUrl: './third-component.component.html',
  styleUrl: './third-component.component.css'
})
export class ThirdComponentComponent {
  likes:number = 100;
  
 clickBottone(){
  this.likes = this.likes + 1
 }
}
