import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffersRoutingModule } from './offers-routing.module';
import { OffersComponent } from './offers.component';
import { SelectedProductComponent } from './selected-product/selected-product.component';
import { SelectionListComponent } from './selection-list/selection-list.component';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select'
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    OffersComponent,
    SelectionListComponent,
    SelectedProductComponent
  ],
  imports: [
    CommonModule,
    OffersRoutingModule,
    FormsModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
    MatCardModule
  ]
})
export class OffersModule { }
