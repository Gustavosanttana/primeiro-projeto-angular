import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RedDirective } from '../../../directives/red.directive';
import { ForDirective } from '../../../directives/for.directive';

@Component({
  selector: 'app-footer',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    MatToolbarModule,
    RedDirective,
    ForDirective
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
