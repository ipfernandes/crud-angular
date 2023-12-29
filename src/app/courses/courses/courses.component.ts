import { Component } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { Observable, catchError, of } from 'rxjs';
import { error } from 'node:console';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  courses$: Observable<Course[]>; //dataSource que será exibido na tela
  displayedColumns = ['_id', 'name', 'category'];

  constructor(private courseService: CoursesService, public dialog: MatDialog){
    this.courses$ = this.courseService.listarCursos()
    .pipe(
      catchError(error => {
        this.openDialog("Erro ao carregar cursos.");
        return of([]) //caso de algum erro, um array vazio é retornado
      })
    );
  }
  openDialog(errorMsg:string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }
}
//Aqui, a classe component tem um papel de comunicação com a tela
