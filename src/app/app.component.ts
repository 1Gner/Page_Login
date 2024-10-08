import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardLeftComponent } from "./components/card-left/card-left.component";
import { CardRighComponent } from "./components/card-righ/card-righ.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardLeftComponent, CardRighComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'login-page';
}
