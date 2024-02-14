import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";

import { DemoRoutingModule } from "./demo-routing/demo-routing.module";
import { ExosModule } from "./exos/exos.module";
import { AscComComponent } from './asc-com/asc-com.component';
import { ChildComponent } from "./child/child.component";
import { ChoiceComponent } from "./choice/choice.component";
import { StudentsComponent } from "./students/students.component";
import { StudentCardComponent } from './student-card/student-card.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentWrapperComponent } from './student-wrapper/student-wrapper.component';
import { RformComponent } from './rform/rform.component';

@NgModule({
    declarations:[AppComponent, ChildComponent, StudentsComponent, ChoiceComponent, StudentListComponent, StudentCardComponent, AscComComponent, StudentFormComponent, StudentWrapperComponent, RformComponent],
    imports:[ BrowserModule, HttpClientModule, FormsModule,  ReactiveFormsModule, RouterOutlet, ExosModule, DemoRoutingModule],
    bootstrap:[AppComponent],
})

export class AppModule {

}