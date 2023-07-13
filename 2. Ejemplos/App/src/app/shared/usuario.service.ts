import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService 
{

  private url = "http://localhost:3000/usuarios";

  public usuario: Usuario;
  constructor(private http: HttpClient) { }

  getUsuario(id:number):Observable<Object>
  {
    return this.http.get(this.url + "/" + id)
  }

  postUsuario(newUser: Usuario):Observable<Object>
  {
    return this.http.post(this.url, newUser)
  }
}

