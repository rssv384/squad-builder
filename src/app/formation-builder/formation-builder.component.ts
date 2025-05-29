import { Component, ElementRef, signal, viewChild } from '@angular/core';
import download from 'downloadjs';
import { toJpeg as htmlToJpeg, toPng as htmlToPng } from 'html-to-image';
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
  // formationViewer = pitch + player items
  private formationViewer =
    viewChild<ElementRef<HTMLDivElement>>('formationViewer');

  get allFormations() {
    return formations;
  }

  // Change formation on select
  onFormationChange(formationId: string) {
    const newSelectedFormation = formations.find(
      (formation) => formation.id === formationId,
    );

    if (newSelectedFormation) {
      this.selectedFormation.set(newSelectedFormation);
    }
  }

  // Save current formation view as PNG file
  saveToPNG() {
    htmlToPng(this.formationViewer()!.nativeElement).then((dataUrl) =>
      download(dataUrl, this.selectedFormation().id + '.png'),
    );
  }

  // Save current formation view as JPEG file
  saveToJPEG() {
    htmlToJpeg(this.formationViewer()!.nativeElement, { quality: 0.9 }).then(
      (dataUrl) => download(dataUrl, this.selectedFormation().id + '.jpeg'),
    );
  }
}
