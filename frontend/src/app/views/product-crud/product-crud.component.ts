import { HeaderService } from './../../componets/templete/header/header.service';

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatList, MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCard } from '@angular/material/card';
import { MatFormField } from '@angular/material/form-field';
import { MatCardTitle } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { ProductReadComponent } from '../../components/product-read/product-read.component';
import { ProductRead2Component } from '../../components/product/product-read2/product-read2.component';

@Component({
  selector: 'app-product-crud',
  standalone: true,
  imports: [
    MatToolbarModule, 
    CommonModule,
    MatSidenavModule,
    MatCardModule,
    MatCardTitle,
    MatFormField,
    MatList,
    MatListModule,
    MatSnackBarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCard,
    FormsModule,
    ProductReadComponent,
    ProductRead2Component
  ],
  templateUrl: './product-crud.component.html',
  styleUrl: './product-crud.component.css'
})
export class ProductCrudComponent {

   constructor(private router: Router, private headerService:HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de produtos',
      icon: 'storefront',
      routerUrl: '/products'
    }
   }


   ngOnInit(): void {}

   navigateProductCreate(): void {
    this.router.navigate(['/products/create'])
  }
  
}
