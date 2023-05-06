import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GyikComponent } from './gyik.component';

const routes: Routes = [
  { path: '', component: GyikComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GyikRoutingModule { }
