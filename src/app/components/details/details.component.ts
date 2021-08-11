import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { Item } from 'src/app/models/Item';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.styl']
})

export class DetailsComponent implements OnInit {

  items: Item[] = [];
  order: any = {};
  defaultImg: string = 'assets/images/img.png';

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private location: Location,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getOrder()
  }

  getOrder(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);

    this.dataService.getOrder(id)
    .subscribe(
      (data: any) => {
        data.order.items.map((item: any) => {
          if (!item.imageUrl) item.imageUrl = this.defaultImg;
          this.items.push(item);

        });
        this.order.id = id;
        this.order.number = data.order.number;
      }
    );
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(DialogElements, dialogConfig);
  }
}

@Component({
  selector: 'dialog-elements',
  templateUrl: './dialog-elements.component.html',
  styleUrls: ['./details.component.styl']
})
export class DialogElements {

  constructor(
    public dialog: MatDialog
  ) { }

  closeDialog(){
    this.dialog.closeAll()
  }
}
