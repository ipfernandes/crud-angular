import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient:HttpClient) { }

  listarCursos(): Course[]{
    return [{_id: 1, name: 'Ciência da computação', category: 'Mestrado'},
    {_id: 2, name: 'Ciências Econômicas', category: 'Bacharelado'}];
  }
}
//Classe responsável pelas regras de negócio, seu objetivo é se conectar com a component
