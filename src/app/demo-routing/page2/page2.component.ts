import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'demo-routing-page2',
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.css'
})
export class Page2Component {
  studentName: string | null ='';
  constructor(private route: ActivatedRoute) {
    this.route.snapshot.paramMap.get('name');
    this.route.params.subscribe(params => {
      this.studentName = params['name'];
    });
  }
}
