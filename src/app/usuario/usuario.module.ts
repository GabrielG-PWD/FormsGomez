import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuarioComponent } from './usuario.component';

@NgModule({
  declarations: [UsuarioComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [UsuarioComponent],
})
export class UsuarioModule {}
