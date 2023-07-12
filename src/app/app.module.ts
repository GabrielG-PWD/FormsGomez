import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, UsuarioComponent],
  imports: [BrowserModule, FormsModule, CommonModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
