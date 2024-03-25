import { ProductService } from './../product.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Product } from '../product.model';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCard } from '@angular/material/card';
import { MatFormField } from '@angular/material/form-field';
import { MatCardTitle } from '@angular/material/card';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [
    MatToolbarModule ,
    CommonModule,
    MatSnackBarModule,
    MatCard,
    MatCardTitle,
    MatFormField,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent {

  product: Product = {
    name: '',
    price: null
  }
   
  constructor(private productService: ProductService,
     private router: Router) { }

  ngOnInit(): void {
    
}

createProduct(): void {
  this.productService.create(this.product).subscribe(() => {
    this.productService.showMessage('Produto criado!')
    this.router.navigate(['/products'])
  })

}

cancel(): void {
  this.router.navigate(['/products'])
}

}
