import { Component, input, signal } from '@angular/core';
import { Position } from '../formation.model';
import { EditPlayerFormComponent } from './edit-player-form/edit-player-form.component';

@Component({
  selector: 'app-player-card',
  imports: [EditPlayerFormComponent],
  templateUrl: './player-card.component.html',
  styleUrl: './player-card.component.scss',
})
export class PlayerCardComponent {
  playerPosition = input.required<Position>();

  playerName = signal<string>('---');
  // Initial value of 0, meaning that no player has been added to the squad
  // Shirt nums go from 1 to 99. When shirt num = 0, a '+' sign will be
  // displayed on the shirt
  playerNumber = signal<number>(0);

  get playerData() {
    return { playerName: this.playerName(), shirtNumber: this.playerNumber() };
  }

  isEditingPlayer = signal<boolean>(false);

  onEditPlayer() {
    this.isEditingPlayer.set(true);
  }

  onDataChanged(newData: { playerName: string; shirtNumber: number }) {
    this.playerName.set(newData.playerName);
    this.playerNumber.set(newData.shirtNumber);
    this.isEditingPlayer.set(false);
  }

  onEditCanceled() {
    this.isEditingPlayer.set(false);
  }
}
