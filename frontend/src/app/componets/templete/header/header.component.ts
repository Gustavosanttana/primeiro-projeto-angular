import { HeaderService } from './header.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar'
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule, 
    MatToolbarModule, 
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
     
  constructor(private headerService: HeaderService) { }

  get title():string {
    return this.headerService.headerData.title
  }

  get icon():string {
    return this.headerService.headerData.icon
  }

  get routerUrl():string {
    return this.headerService.headerData.routerUrl
  }
}
