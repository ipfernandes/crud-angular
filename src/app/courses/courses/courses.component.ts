import { Component } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  courses: Observable<Course[]>; //dataSource que será exibido na tela
  displayedColumns = ['_id', 'name', 'category'];

  constructor(private courseService: CoursesService){
    this.courses = this.courseService.listarCursos();
  }
}
//Aqui, a classe component tem um papel de comunicação com a tela
