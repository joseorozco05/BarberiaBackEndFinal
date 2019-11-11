import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../services/servicio.service';
import { Servicio } from '../models/servicio';

@Component({
  selector: 'app-servicio-add',
  templateUrl: './servicio-add.component.html',
  styleUrls: ['./servicio-add.component.css']
})
export class ServicioAddComponent implements OnInit {

  constructor(private servicioService: ServicioService) { }
servicio: Servicio;

  ngOnInit() {
    this.servicio = { CodServicio: null, NomServicio: '',Descripcion: '' };
  }

  add() {
    this.servicioService.addServicio(this.servicio)
    .subscribe(Servicio => { 
      alert('Se agrego un nuevo servicio')
    });
    }

}
