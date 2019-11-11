import { Component, OnInit } from '@angular/core';
import {ServicioService} from '../services/servicio.service'
import { Servicio } from '../models/servicio';

@Component({
  selector: 'app-servicio-list',
  templateUrl: './servicio-list.component.html',
  styleUrls: ['./servicio-list.component.css']
})
export class ServicioListComponent implements OnInit {
  servicios: Servicio[];

  constructor(private servicioservice: ServicioService) { }

  ngOnInit() {
    this.getAll();
  }
  getAll(){
    this.servicioservice.getAll().subscribe(servicios=>this.servicios=servicios);
    }

}
