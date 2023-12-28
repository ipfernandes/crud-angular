import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly Endpoint = '/assets/courses.json'

  constructor(private httpClient:HttpClient) { }
  //o casting é opcional, porém o código fica mais legível com ele
  listarCursos(){
    return this.httpClient.get<Course[]>(this.Endpoint);
  }
}
//Classe responsável pelas regras de negócio, seu objetivo é se conectar com a component
