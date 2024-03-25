import { ProductService } from './../product/product.service';
import { Product } from './../product/product.model';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { subscribe } from 'diagnostics_channel';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-read',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    RouterModule
  ],
  templateUrl: './product-read.component.html',
  styleUrl: './product-read.component.css'
})
export class ProductReadComponent {

  products?: Product[]
  displayedColumns = ['id', 'name', 'price', 'action']
     
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
       this.products = products
     })
  }
}
