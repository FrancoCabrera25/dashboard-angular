import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeavyLoadersSlowComponent } from '../../../shared/heavy-loaders-slow/heavy-loaders-slow.component';

@Component({
  standalone: true,
  imports: [CommonModule, HeavyLoadersSlowComponent],
  templateUrl: './defer-views.component.html',
  styleUrl: './defer-views.component.scss'
})
export default class DeferViewsComponent {

}
