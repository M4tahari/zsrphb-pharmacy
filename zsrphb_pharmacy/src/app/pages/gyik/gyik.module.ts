import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GyikRoutingModule } from './gyik-routing.module';
import { GyikComponent } from './gyik.component';
import { DateFormatPipe } from '../../shared/pipes/date-format.pipe';
import { BigInitialUsernamePipe } from '../../shared/pipes/big-initial-username.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    GyikComponent,
    DateFormatPipe,
    BigInitialUsernamePipe
  ],
  imports: [
    CommonModule,
    GyikRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class GyikModule { }
