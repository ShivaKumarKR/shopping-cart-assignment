import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomButtonModule } from 'src/app/shared/custom-button/custom-button.module';

const routes = [
  {path: '', component: RegisterComponent}
]

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomButtonModule,
    RouterModule.forChild(routes)
  ]
})
export class RegisterModule { }
