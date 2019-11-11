import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-usuario-add',
  templateUrl: './usuario-add.component.html',
  styleUrls: ['./usuario-add.component.css']
})
export class UsuarioAddComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }
usuario: Usuario;

  ngOnInit() {
    this.usuario = { CodUsuario: 0, NomCompleto: '', Telefono: 0, Direccion:'', Sexo:'', Edad: 0 };
  }

  add() {
    this.usuarioService.addUsuario(this.usuario)
    .subscribe(usuario => {
    alert('Se agrego un nuevo usuario')
    });
    }

}
