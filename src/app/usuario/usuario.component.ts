import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent {
  constructor() {}

  userModel = {
    email: '',
    password: '',
    name: '',
    lastName: '',
  };

  onSubmit(): void {
    console.log(this.userModel);
  }
}
