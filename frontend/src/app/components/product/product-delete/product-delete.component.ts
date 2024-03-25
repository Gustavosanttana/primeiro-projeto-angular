import { ProductService } from './../product.service';
import { ProductUpdateComponent } from './../product-update/product-update.component';
import { Product } from './../product.model';
import { subscribe } from 'diagnostics_channel';
import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

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
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-product-delete',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule,
    ProductUpdateComponent,
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
    MatInput
  ],
  templateUrl: './product-delete.component.html',
  styleUrl: './product-delete.component.css'
})
export class ProductDeleteComponent {

  product: Product;

  constructor(private productService: ProductService,
     private router:Router,
      private route: ActivatedRoute) { }

  ngOnInit(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.readById(id).subscribe((product) => {
      this.product = product;
    })
  }

  deleteProduct(): void {
     this.productService.delete(this.product.id).subscribe(() => {
      this.productService.showMessage('Produto excluido com sucesso')
      this.router.navigate(['/products']);
     })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }


}
