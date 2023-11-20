import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '../../../shared/title/title.component';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../interfaces/user.interface';
import { toSignal  } from '@angular/core/rxjs-interop'
import { switchMap } from 'rxjs';
import { UserService } from '../../../services/user.service';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export default class UserComponent {

  private router = inject(ActivatedRoute);
  private userService = inject(UserService);

  public user = toSignal(
    this.router.params.pipe(
      switchMap( ({ id }) => this.userService.getUserById(id))
    )
  )

  public titleLabel = computed( () => {

    if(this.user()){
      return `Información del usuario ${this.user()?.first_name} ${this.user()?.last_name}`
    }

    return "Información del usuario"
  })

    constructor() {
      this.router.params.subscribe()
    }
}
