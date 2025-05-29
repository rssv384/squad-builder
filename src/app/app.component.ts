import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { FormationBuilderComponent } from './formation-builder/formation-builder.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FormationBuilderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'squad-builder';
}
