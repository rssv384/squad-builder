import { KeyValuePipe } from '@angular/common';
import { Component } from '@angular/core';
import { PlayerCardComponent } from '../player-card/player-card.component';

@Component({
  selector: 'app-pitch',
  imports: [PlayerCardComponent],
  templateUrl: './pitch.component.html',
  styleUrl: './pitch.component.scss',
})
export class PitchComponent {}
