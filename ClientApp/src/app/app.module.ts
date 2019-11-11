import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ServicioAddComponent } from './servicio-add/servicio-add.component';
import { ServicioListComponent } from './servicio-list/servicio-list.component';
import { ServicioEditComponent } from './servicio-edit/servicio-edit.component';
import { UsuarioAddComponent } from './usuario-add/usuario-add.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioEditComponent } from './usuario-edit/usuario-edit.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ServicioAddComponent,
    ServicioListComponent,
    ServicioEditComponent,
    UsuarioAddComponent,
    UsuarioListComponent,
    UsuarioEditComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'servicioadd', component: ServicioAddComponent, },
      { path: 'serviciolist', component: ServicioListComponent },
      { path: 'servicioedit', component: ServicioEditComponent },
      { path: 'usuarioadd', component: UsuarioAddComponent, },
      { path: 'usuariolist', component: UsuarioListComponent },
      { path: 'usuarioedit', component: UsuarioEditComponent },
    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
