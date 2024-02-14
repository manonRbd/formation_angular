import { Component, EventEmitter, Output } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Event } from '@angular/router';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent {
  constructor( private studentService : StudentService) { }
  student : Student = {
    name: '',
    grade: 10
  }
  @Output()
  newStudent : EventEmitter<null> = new EventEmitter();
  message : string = ''; 
  onSubmit() {
    if(this.student.grade <0 || this.student.grade > 100){
      this.message='Enregistrement impossible ! Grade is between 0 and 100';
      return;
    }
    console.log('Form submitted', this.student);
    this.studentService.addStudent(this.student).subscribe( (response) => { console.log(response);});
    this.newStudent.emit();
    this.message = 'Student added successfully';
  }
}
