import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarInfoComponent } from './bar-info.component';


@NgModule({
  declarations: [
    BarInfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BarInfoComponent
  ]
})
export class BarInfoModule { }
