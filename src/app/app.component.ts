import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameListComponent } from './game-list/game-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'game-list-app';
}
