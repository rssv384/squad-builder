import { Component } from '@angular/core';
import { PitchComponent } from './pitch/pitch.component';

@Component({
  selector: 'app-formation-builder',
  imports: [PitchComponent],
  templateUrl: './formation-builder.component.html',
  styleUrl: './formation-builder.component.scss',
})
export class FormationBuilderComponent {}
