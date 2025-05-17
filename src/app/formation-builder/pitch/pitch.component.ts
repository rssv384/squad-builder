import { KeyValuePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { Formation } from '../formation.model';
import { PlayerCardComponent } from '../player-card/player-card.component';

@Component({
  selector: 'app-pitch',
  imports: [PlayerCardComponent],
  templateUrl: './pitch.component.html',
  styleUrl: './pitch.component.scss',
})
export class PitchComponent {
  formation = input.required<Formation>();
}
