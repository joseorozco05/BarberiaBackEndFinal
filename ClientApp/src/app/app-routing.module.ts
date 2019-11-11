import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ServicioListComponent } from './servicio-list/servicio-list.component';
import { ServicioAddComponent } from './servicio-add/servicio-add.component';
import { ServicioEditComponent } from './servicio-edit/servicio-edit.component';

import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioAddComponent } from './usuario-add/usuario-add.component';
import { UsuarioEditComponent } from './usuario-edit/usuario-edit.component';

const routes: Routes = [
  {
  path:'serviciolist',
  component:ServicioListComponent
  },
  {
  path:'servicioadd',
  component:ServicioAddComponent
  },
  {
  path:'servicioedit',
  component:ServicioEditComponent
  },
  {
  path:'usuariolist',
  component:UsuarioListComponent
  },
  {
  path:'usuarioadd',
  component:UsuarioAddComponent
  },
  {
  path:'usuarioedit',
  component:UsuarioEditComponent
  }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }
