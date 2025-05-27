import {
  AfterContentInit,
  Component,
  input,
  OnInit,
  output,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CanDeactivateFn } from '@angular/router';

@Component({
  selector: 'app-edit-player-form',
  imports: [FormsModule],
  templateUrl: './edit-player-form.component.html',
  styleUrl: './edit-player-form.component.scss',
})
export class EditPlayerFormComponent implements AfterContentInit {
  playerData = input.required<{ playerName: string; shirtNumber: number }>();
  enteredName = signal('');
  enteredNumber = signal('');

  // output for event when user submits form in order to save changes
  saved = output<{ playerName: string; shirtNumber: number }>();
  // output for event when user clicks cancel button
  editCanceled = output();

  // Populate form with current player data
  ngAfterContentInit() {
    this.setToDefault();
  }

  setToDefault() {
    this.enteredName.set(this.playerData().playerName);
    this.enteredNumber.set(this.playerData().shirtNumber.toString());
  }

  // Emit submit event to update player data on PlayerCard component
  onSubmit() {
    this.saved.emit({
      playerName: this.enteredName(),
      shirtNumber: parseInt(this.enteredNumber()),
    });
  }

  // Emit cancel event in order to hide form component
  onCancel() {
    this.setToDefault();
    this.editCanceled.emit();
  }
}
