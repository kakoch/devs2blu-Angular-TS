import { Injectable } from '@angular/core';
import { urlBack } from './urlEnum';
import {HttpClient} from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { ProductModel } from './Product.model';

@Injectable({
  providedIn: 'root'
})

//productController
export class ProdutoService {
  private urlBase = urlBack.BASE_TEST + '/api/products'
  constructor(private http: HttpClient) { }

  public listAll(): Observable<ProductModel[]>{
    return this.http.get<ProductModel[]>(this.urlBase);
 }
 public create(body: ProductModel): Observable<number>{
  return this.http.post<number>(this.urlBase, body)
 }
}

