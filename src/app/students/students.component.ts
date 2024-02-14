import { Component } from '@angular/core';

interface Student {
  //id: number;
  name: string;
  grade: number;

}

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  students: Student[] = [ {name: 'John', grade: 90}, {name: 'Jane', grade: 80}, {name: 'Jack', grade: 45}, {name: 'Jill', grade: 60}];
  objStyle: any = {
    color: 'green',
    fontSize: '20pt'
  }
  objStyle2: any = {
    fontWeight: 'bold',
    fontSize: '40pt',
    textDecoration: 'underline'
  }
  objClass: any = {
    winner: true,
    loser:false
  }
  constructor() {
    setTimeout(() => {
      //this.objStyle =  this.objStyle2;
      let mergeProps= {...this.objStyle, ...this.objStyle2};
      this.objStyle = mergeProps;
      this.objClass = {winner: false, loser: true};
    }, 5000);
  }
  getColor(grade: number): string {
    return grade >= 75 ? 'green' : 'red';
  }
}
