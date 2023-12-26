import { Component } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  courses: Course[]; //dataSource
  displayedColumns = ['_id', 'name', 'category'];

  constructor(){
    this.courses = [
      {_id: 1, name: 'Ciência da computação', category: 'Mestrado'},
      {_id: 2, name: 'Ciências Econômicas', category: 'Bacharelado'}
    ]
  }
}
