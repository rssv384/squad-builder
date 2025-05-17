import { Component, signal } from '@angular/core';
import { Formation, formations } from './formation.model';
import { PitchComponent } from './pitch/pitch.component';

@Component({
  selector: 'app-formation-builder',
  imports: [PitchComponent],
  templateUrl: './formation-builder.component.html',
  styleUrl: './formation-builder.component.scss',
})
export class FormationBuilderComponent {
  selectedFormation = signal<Formation>(formations[0]);

  get allFormations() {
    return formations;
  }

  onFormationChange(formationId: string) {
    const newSelectedFormation = formations.find(
      (formation) => formation.id === formationId,
    );

    if (newSelectedFormation) {
      this.selectedFormation.set(newSelectedFormation);
    }
  }
}
