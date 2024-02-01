import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-third-component',
  standalone: true,
  imports: [MatProgressBarModule, MatButtonModule],
  templateUrl: './third-component.component.html',
  styleUrl: './third-component.component.css'
})
export class ThirdComponentComponent {
  likes:number = 40;
  
 clickBottone(){
  this.likes = this.likes + 1
  
 }
}
