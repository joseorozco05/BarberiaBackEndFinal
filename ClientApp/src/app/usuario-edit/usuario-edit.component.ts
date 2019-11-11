import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../models/usuario';
import { Location } from '@angular/common';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent implements OnInit {
  usuario:Usuario;
  stask:string;

  constructor(private route: ActivatedRoute,private usuarioService: UsuarioService, private location: Location) { }

  ngOnInit() {
    this.get();
  }

  get(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.usuarioService.get(id).subscribe(hero => this.usuario = hero);
    }

    update(): void {
      this.usuarioService.update(this.usuario).subscribe(() => this.goBack());
      }

      delete(): void {
        this.usuarioService.delete(this.usuario).subscribe(() => this.goBack());
        }
        goBack(): void {
          this.location.back();
          }

}
