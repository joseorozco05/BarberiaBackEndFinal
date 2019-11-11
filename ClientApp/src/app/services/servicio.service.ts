import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Servicio } from '../models/servicio';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor( private http:HttpClient, @Inject('BASE_URL') private baseUrl:string) { }

  
  addServicio(servicio: Servicio): Observable<Servicio> {
    return this.http.post<Servicio>(this.baseUrl + 'api/servicio', servicio, httpOptions).pipe(
      tap((newServicio: Servicio) => this.log(`added NewServicio w/ id=${newServicio.CodServicio}`)),
      catchError(this.handleError<Servicio>('addServicio'))
    );
  }


  getAll(): Observable<Servicio[]> {
    return this.http.get<Servicio[]>(this.baseUrl + 'api/Servicio').pipe(
      tap(_ => this.log('Se Consulta la información')),
      catchError(this.handleError<Servicio[]>('getAll', []))
    );
  }

  get(id: number): Observable<Servicio> {
    const url = `${this.baseUrl + 'api/Servicio'}/${id}`;
    return this.http.get<Servicio>(url).pipe(
      tap(_ => this.log(`fetched servicio id=${id}`)),
      catchError(this.handleError<Servicio>(`get Servicio id=${id}`))
    );
  }


  update(servicio: Servicio): Observable<any> {
    const url = `${this.baseUrl + 'api/Servicio'}/${servicio.CodServicio}`;
    return this.http.put(url, servicio, httpOptions).pipe(
      tap(_ => this.log(`updated servicio id=${servicio.CodServicio}`)),
      catchError(this.handleError<any>('servicio'))
    );
  }

  delete(servicio: Servicio | number): Observable<Servicio> {
    const codigo = typeof servicio === 'number' ? servicio : servicio.NomServicio;
    const url = `${this.baseUrl + 'api/Servicio'}/${codigo}`;
    return this.http.delete<Servicio>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted servicio codigo=${codigo}`)),
      catchError(this.handleError<Servicio>('deleteServicio'))
    );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    alert(`ServicioService: ${message}`);
  }

}

