import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MytabComponent } from './mytab/mytab.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MytabComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myApp';
}
