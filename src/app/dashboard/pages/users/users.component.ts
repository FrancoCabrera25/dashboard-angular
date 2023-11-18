import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/user.service';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export default class UsersComponent {

  public userService = inject(UserService);


}
