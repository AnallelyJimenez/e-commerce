import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.styl']
})
export class AgregarProductoComponent implements OnInit {

  form = this.fb.group({
    name: [null, Validators.required],
    price: ['', Validators.required],
    quantity: ['', Validators.required],
    sku: ['', Validators.required]
  });
  

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private dataService: DataService,
    private location: Location
  ) { }

  ngOnInit(): void {
    
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit() {
    if (this.form.valid) {
      // this.form.reset();
      this.addItem();
    }
  }

  addItem(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    
    this.dataService.addItem(this.form.value, id);;
  }

}
