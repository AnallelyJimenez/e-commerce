import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Order } from 'src/app/models/Order'
import { Item } from '../models/Item'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private api = 'https://eshop-deve.herokuapp.com/api/v2/orders';
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYyMDY2Mjk4NjIwM30.lhfzSXW9_TC67SdDKyDbMOYiYsKuSk6bG6XDE1wz2OL4Tq0Og9NbLMhb0LUtmrgzfWiTrqAFfnPldd8QzWvgVQ'
    })
  };

  constructor(private http: HttpClient) { }

  getOrders() {
    return this.http.get<Order>(this.api, this.httpOptions);
    
    
    //return this.http.get<Item>(this.api, this.httpOptions);
  }

  getOrder(id: number) {
    const url = `${this.api}/${id}`;

    return this.http.get<Order>(url, this.httpOptions);
  }

  addItem(item: any, id: number) {
    const url = `${this.api}/${id}`;
    const body = JSON.stringify(item);

    console.log('id: ' + id)

    return this.http.post(this.api, body, this.httpOptions);
  }

}
