import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { single } from 'rxjs';
import { TitleComponent } from '../../../shared/title/title.component';


type Grade = 'A' | 'B' | 'F';
@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss'
})
export default class ControlFlowComponent {

  public showContent = signal(false);

  public grade = signal<Grade>('A');

  public frameworks = signal(['Angular', 'Vue', 'React', 'Svelt']);


  public frameworks2 = signal([]);

  public toggleContent() : void {
    this.showContent.update( (current) => !current)
  }

}
