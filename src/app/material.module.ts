import { NgModule } from '@angular/core'; 

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button'; 
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [],
  exports: [
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule
  ]
})
export class MaterialModule { }