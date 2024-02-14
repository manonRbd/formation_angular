import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrl: './rform.component.css'
})
export class RformComponent {
  studentForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(1)]),
    grade: new FormControl('10', [Validators.required, Validators.min(0), Validators.max(100)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    postCode: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{5}$')]),

  });

  onSubmit() {
    console.log('Form submitted', this.studentForm.value);
  }
}
