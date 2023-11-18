import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './change-detection.component.html',
  styleUrl: './change-detection.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ChangeDetectionComponent {

  public currentFramework  = computed( () => `Change detection - ${this.frameworkasSignal().name }`)
  public frameworkasSignal = signal({
    name: 'Angular',
    reeaseDate: '2016',
  });

  public frameworkasProperty = {
    name: 'Angular',
    reeaseDate: '2016',
  };

   constructor()  {
     setTimeout(() => {

     // this.frameworkasProperty.name = 'React';

      this.frameworkasSignal.update( current =>  ({
        ...current,
        name: 'React',
      }));
       console.log('lala')
     }, 3000);
   }
}
