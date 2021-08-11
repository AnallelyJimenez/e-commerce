import { Component, OnInit } from '@angular/core';

import { Order } from 'src/app/models/Order'
// import { Item } from 'src/app/models/Item';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-pagos',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.styl']
})
export class OrdersComponent implements OnInit {

  //orden: string;
  orders: Order[] = [];
  // items: Item[] = [];

  constructor( public dataService: DataService ) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {

    this.dataService.getOrders()
    .subscribe(
      (data: any) => {
        data.orders.map((order: any) => {
          order.hide = true;
          this.orders.push(order);
        });
      }
    );


    
    /*this.dataService.getOrders()
    .subscribe(
      (data: any) => {
        data.order.items.map((item: any) => {
          item.hide = true;
          this.items.push(item);
        });
       console.log(this.items)

      console.log(data)

      this.orden = data.order.number;
      }
    );*/
  }

  /*toggle(id: string) {
    this.items.map((item: any) => {
      if (item.id === id) item.hide = !item.hide;
    });
  }*/


}
