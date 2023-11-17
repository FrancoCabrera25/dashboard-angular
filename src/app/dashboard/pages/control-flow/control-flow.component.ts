import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';


type Grade = 'A' | 'B' | 'F';
@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss'
})
export default class ControlFlowComponent {

  public showContent = signal(false);

  public grade = signal<Grade>('A');

  public toggleContent() : void {
    this.showContent.update( (current) => !current)
  }

}
