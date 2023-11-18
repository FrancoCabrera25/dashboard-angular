import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './heavy-loaders-slow.component.html',
  styleUrl: './heavy-loaders-slow.component.scss',
})
export class HeavyLoadersSlowComponent {

  @Input({ required: true }) cssClass!: string;
  constructor() {
    console.log('heavy loader component slow');
    const start = Date.now();

    // while (Date.now() - start < 3000){
    //   console.log('cargado');
    // }
  }
}
