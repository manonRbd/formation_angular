import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Angular';
  onClick(): void {
    //console.log("ok");
    this.title += "!";
  };
  onInit(): void{
    this.title="Angular"      
  };
  onMessage(): void {
    console.log("message:");
  }
  onAddedStudent(): void {
    console.log("addedStudent:");
  }
}
