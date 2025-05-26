import { Component, input } from '@angular/core';
import { Position } from '../formation.model';

@Component({
  selector: 'app-player-card',
  imports: [],
  templateUrl: './player-card.component.html',
  styleUrl: './player-card.component.scss',
})
export class PlayerCardComponent {
  playerPosition = input.required<Position>();
  playerName = input<string>('---');
  playerNumber = input.required<number>();
}
