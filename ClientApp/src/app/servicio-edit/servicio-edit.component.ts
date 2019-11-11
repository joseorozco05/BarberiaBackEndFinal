import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioService } from '../services/servicio.service';
import { Servicio } from '../models/servicio';
import { Location } from '@angular/common';

@Component({
  selector: 'app-servicio-edit',
  templateUrl: './servicio-edit.component.html',
  styleUrls: ['./servicio-edit.component.css']
})
export class ServicioEditComponent implements OnInit {
  servicio:Servicio;
  stask:string;

  constructor(private route: ActivatedRoute,private servicioService: ServicioService, private location: Location) {  this.servicio = new Servicio();}

  ngOnInit() {
    this.get();
  }
  get(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.servicioService.get(id).subscribe(t => this.servicio = t);
    }

    update(): void {
      this.servicioService.update(this.servicio).subscribe(() => this.goBack());
      }

      delete(): void {
        this.servicioService.delete(this.servicio).subscribe(() => this.goBack());
        }
        goBack(): void {
          this.location.back();
          }

}
