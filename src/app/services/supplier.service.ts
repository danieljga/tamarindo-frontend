import { Injectable } from '@angular/core';

import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Supplier } from '../models/supplier';
import data from '@config/config.json';
import { User } from '../models/user';

const endpoint = data.backend_url;

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getAuthorization()
    })
  }

  getSuppliers(): Observable<Supplier[]> {
    return this.httpClient.get<any>(endpoint + '/suppliers', this.httpHeader)
    .pipe(
      map( data => {
        return this.convertDataToSuppliers(data.data);
      }),
      catchError(this.processError)
    )
  }

  addSupplier(supplier:Supplier): Observable<any> {
    return this.httpClient.post<string>(endpoint + '/suppliers', this.convertSupplier(supplier), this.httpHeader)
    .pipe(
      map( data => {
        console.log(data);
        return data;
      }),
      catchError(this.processError)
    )
  }

  editSupplier(supplier:Supplier): Observable<any> {
    return this.httpClient.put<string>(endpoint + '/suppliers/' + supplier.id, this.convertSupplier(supplier), this.httpHeader)
    .pipe(
      map( data => {
        console.log(data);
        return data;
      }),
      catchError(this.processError)
    )
  }

  deleteSupplier(supplier:Supplier): Observable<any> {
    return this.httpClient.delete<string>(endpoint + '/suppliers/' + supplier.id, this.httpHeader)
    .pipe(
      map( data => {
        console.log(data);
        return data;
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

  convertDataToSuppliers(data:Array<any>): Supplier[]{
    let suppliers:Supplier[] = [];
    data.forEach(item => {
      let supplier:Supplier = {
        id: item.id,
        name: item.name,
        email: item.email,
        phone: item.phone,
        address: item.address,
        contactName: item.contact_name,
        createdDate: item.created_at
      }
      suppliers.push(supplier);
    });
    return suppliers;
  }

  convertSupplier(supplier:Supplier){
    return {
      'name':supplier.name,
      'email':supplier.email,
      'phone':supplier.phone,
      'contact_name':supplier.contactName,
      'address':supplier.address
    }
  }
}
