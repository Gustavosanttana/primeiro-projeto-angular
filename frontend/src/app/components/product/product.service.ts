import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from './product.model';
import { Observable, catchError, EMPTY } from 'rxjs';

import { map } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

     beseUrl = " http://localhost:8080/products"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, '', {
      duration:3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  create(product: Product): Observable<Product>{
      return this.http.post<Product>(this.beseUrl, product).pipe(
        map((obj) => obj),
        catchError((e) => this.errorHandler(e))
      )
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.beseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    )
  }

  readById(id: number): Observable<Product>{
    const url = `${this.beseUrl}/${id}`
    return this.http.get<Product>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    )
  }

  update(product: Product): Observable<Product>{
    const url = `${this.beseUrl}/${product.id}`
    return this.http.put<Product>(url, product).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    )
  }

  delete(id: number): Observable<Product> {
    const url = `${this.beseUrl}/${id}`;
    return this.http.delete<Product>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    )
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro", true)
    return EMPTY
  }
}
