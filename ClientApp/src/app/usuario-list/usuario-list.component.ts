import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../services/usuario.service'
import { Usuario } from '../models/usuario';



@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {
  usuarios:Usuario[];

  constructor(private usuarioservice:UsuarioService) { }

  ngOnInit() {
    this.getAll();
  }
  
  getAll(){
    this.usuarioservice.getAll().subscribe(usuarios=>this.usuarios=usuarios);
    }

}
