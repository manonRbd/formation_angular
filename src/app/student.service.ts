import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { Student } from './student'; 

const apiUrl = 'http://localhost:3000/students';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }

  getStudents(): Observable<Student[]>{
     return this.httpClient.get<Student[]>(apiUrl);
  }

  addStudent(student: Student): Observable<HttpResponse<Student>>{
    return this.httpClient.post<HttpResponse<Student>>(apiUrl, student);
  }

}
