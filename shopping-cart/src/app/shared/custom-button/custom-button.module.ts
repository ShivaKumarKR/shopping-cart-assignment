import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from './custom-button.component';



@NgModule({
  declarations: [CustomButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [CustomButtonComponent]
})
export class CustomButtonModule { }
