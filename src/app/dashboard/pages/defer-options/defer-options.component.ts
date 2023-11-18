import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeavyLoadersFastComponent } from '../../../shared/heavy-loaders-fast/heavy-loaders-fast.component';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  selector: 'app-defer-options',
  standalone: true,
  imports: [CommonModule, HeavyLoadersFastComponent, TitleComponent],
  templateUrl: './defer-options.component.html',
  styleUrl: './defer-options.component.scss'
})
export default class DeferOptionsComponent {

}
