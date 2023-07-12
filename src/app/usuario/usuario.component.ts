import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent {
  constructor() {}
  registrado = false;
  mensaje = '';

  userModel = {
    email: '',
    password: '',
    name: '',
    lastName: '',
  };

  onSubmit(): void {
    if (
        this.userModel.name.length != 0 &&
        this.userModel.email.length != 0  &&
        this.userModel.password.length != 0  &&
        this.userModel.name.length != 0
    ) {
      this.registrado = true;
      this.mensaje = 'usuario registrado con éxito';
    }
  }
}
