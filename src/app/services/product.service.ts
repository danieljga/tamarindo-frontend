import { Injectable } from '@angular/core';

import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/product';
import data from '@config/config.json';
import { User } from '../models/user';

const endpoint = data.backend_url;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl:string = endpoint;

  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getAuthorization()
    })
  }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<any>(this.apiUrl + '/products', this.httpHeader)
    .pipe(
      map( data => {
        console.log(data);
        return this.convertDataToProducts(data.data);
      }),
      catchError(this.processError)
    )
  }

  getAuthorization(): string {
    let user: User = JSON.parse(sessionStorage.getItem('user') || '{}');
    return user.token != null ? "Bearer " + user.token.replace(/"/g,'') : '';
  }

  processError(err:any) {
    console.log(err);
    let message = '';
    if(err.error instanceof ErrorEvent) {
      message = err.error.message;
    } else {
      message = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    console.log(message);
    return throwError(message);
  }

  convertDataToProducts(data:Array<any>): Product[]{
    let products:Product[] = [];
    data.forEach(item => {
      let product:Product = {
        id: item.id,
        reference: item.reference
      }
      products.push(product);
    });
    return products;
  }
}
