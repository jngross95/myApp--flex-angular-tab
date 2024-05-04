import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MytabComponent } from './mytab/mytab.component';
import { MynavComponent } from './mynav/mynav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MytabComponent, MynavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myApp';
}
