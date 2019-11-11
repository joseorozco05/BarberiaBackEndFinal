import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Usuario } from '../models/usuario';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }


  addUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.baseUrl + 'api/usuario', usuario, httpOptions).pipe(
      tap((newUsuario: Usuario) => this.log(`added NewUsuario w/ id=${newUsuario.CodUsuario}`)),
      catchError(this.handleError<Usuario>('addUsuario'))
    );
  }
  getAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.baseUrl + 'api/Usuario').pipe(
      tap(_ => this.log('Se Consulta la información')),
      catchError(this.handleError<Usuario[]>('getAll', []))
    );
  }

  get(id: number): Observable<Usuario> {
    const url = `${this.baseUrl + 'api/Usuario'}/${id}`;
    return this.http.get<Usuario>(url).pipe(
      tap(_ => this.log(`fetched usuario id=${id}`)),
      catchError(this.handleError<Usuario>(`get Usuario id=${id}`))
    );
  }


  update(usuario: Usuario): Observable<any> {
    const url = `${this.baseUrl + 'api/Usuario'}/${usuario.CodUsuario}`;
    return this.http.put(url, usuario, httpOptions).pipe(
      tap(_ => this.log(`updated usuario id=${usuario.CodUsuario}`)),
      catchError(this.handleError<any>('usuario'))
    );
  }

  delete(usuario: Usuario | number): Observable<Usuario> {
    const codigo = typeof usuario === 'number' ? usuario : usuario.NomCompleto;
    const url = `${this.baseUrl + 'api/Usuario'}/${codigo}`;
    return this.http.delete<Usuario>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted usuario codigo=${codigo}`)),
      catchError(this.handleError<Usuario>('deleteUsuario'))
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
    alert(`UsuarioService: ${message}`);
  }


}
