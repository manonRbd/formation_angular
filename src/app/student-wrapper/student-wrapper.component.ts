import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';
@Component({
  selector: 'app-student-wrapper',
  templateUrl: './student-wrapper.component.html',
  styleUrl: './student-wrapper.component.css'
})
export class StudentWrapperComponent {
  students : Student[]= [];
  constructor(private studentService: StudentService) { 
    this.getStudents();    
  }
  getStudents(): void{ 
     this.studentService.getStudents().subscribe((students : Student[]) => {
      console.log(students);
      this.students = students;
    });
  }

  onAddedStudent(student: Student): void {
    this.students.push(student);
  }
}
