import { ProductService } from './../product.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductReadComponent } from '../../product-read/product-read.component';
import { ProductDeleteComponent } from '../product-delete/product-delete.component';
import { ProductCreateComponent } from '../product-create/product-create.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';

import { Product } from '../product.model';





@Component({
  selector: 'app-product-update',
  standalone: true,
  imports: [
    FormsModule,
    ProductReadComponent,
    RouterModule,
    ProductCreateComponent,
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    ProductDeleteComponent
  ],
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.css'
})
export class ProductUpdateComponent {

  product: Product;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
     const id = +this.route.snapshot.paramMap.get('id')
     this.productService.readById(id).subscribe(product => {
        this.product = product
     });
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage('Producto atualizado com sucesso')
      this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
