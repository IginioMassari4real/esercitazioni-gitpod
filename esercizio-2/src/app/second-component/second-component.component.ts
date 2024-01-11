import { Component } from '@angular/core';
import { ThirdComponentComponent } from './third-component/third-component.component';
import { FourthComponentComponent } from './fourth-component/fourth-component.component';

@Component({
  selector: 'app-second-component',
  standalone: true,
  imports: [ThirdComponentComponent, FourthComponentComponent],
  templateUrl: './second-component.component.html',
  styleUrl: './second-component.component.css'
})
export class SecondComponentComponent {
text1: string="caparezza meme 1"
text2: string="caparezza ti osserva minaccioso perchè vuole tutti i tuoi soldi"
text3:string="caparezza meme 2"
text4:string="caparezza ti osserva minaccioso perchè vuole il tuo pranzo"
}
