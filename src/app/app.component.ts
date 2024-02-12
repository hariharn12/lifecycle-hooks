import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoxComponent } from './box/box.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BoxComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'lifecycle-hooks';
  inputbox='200px';

  boxNeeded = false;
  togglebox() {
    this.boxNeeded = !this.boxNeeded;
  }
  showbox(event:any){
    this.inputbox=`${event.target.value}px`

  }
}
