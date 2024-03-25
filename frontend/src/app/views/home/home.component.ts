import { HeaderService } from './../../componets/templete/header/header.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list'
import { MatCardModule } from '@angular/material/card';
import { ForDirective } from '../../directives/for.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [MatToolbarModule,
     CommonModule, 
     MatSidenavModule, 
     MatListModule, 
     HomeComponent,
     MatCardModule,
     ForDirective
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Iníco',
      icon: 'home',
      routerUrl: ''
    }
   }

}
