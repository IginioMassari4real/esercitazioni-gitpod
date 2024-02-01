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
  like = 0;

  constructor(){
    this.like = Math.floor(Math.random () * 100);
  }

  aggiuntalike(){
    if (this.like < 100)
    this.like = this.like + 1
  }

  
}
