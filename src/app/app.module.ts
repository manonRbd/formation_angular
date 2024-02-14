import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { ChildComponent } from "./child/child.component";
import { RouterOutlet } from '@angular/router';
import { ExosModule } from "./exos/exos.module";
import { StudentsComponent } from "./students/students.component";
import { ChoiceComponent } from "./choice/choice.component";
import { StudentListComponent } from './student-list/student-list.component';
import { StudentCardComponent } from './student-card/student-card.component';
import { AscComComponent } from './asc-com/asc-com.component';
import { HttpClientModule } from "@angular/common/http";
import { StudentFormComponent } from './student-form/student-form.component';
import { FormsModule } from "@angular/forms";
import { StudentWrapperComponent } from './student-wrapper/student-wrapper.component';
@NgModule({
    declarations:[AppComponent, ChildComponent, StudentsComponent, ChoiceComponent, StudentListComponent, StudentCardComponent, AscComComponent, StudentFormComponent, StudentWrapperComponent],
    imports:[ BrowserModule, ExosModule, HttpClientModule,FormsModule, RouterOutlet],
    bootstrap:[AppComponent],
})

export class AppModule {

}