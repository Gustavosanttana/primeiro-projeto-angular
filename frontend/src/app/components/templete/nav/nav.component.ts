import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list'
import { HomeComponent } from '../../../views/home/home.component';
import { ProductCrudComponent } from '../../../views/product-crud/product-crud.component';
import { RouterModule } from '@angular/router';
import { ProductCreateComponent } from '../../product/product-create/product-create.component'; 
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-nav',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [ CommonModule,
    MatToolbarModule,
    NavComponent,
    HomeComponent,
    MatSidenavModule,
    MatListModule,
    ProductCrudComponent,
    RouterModule,
    ProductCreateComponent,
    MatButtonModule
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
