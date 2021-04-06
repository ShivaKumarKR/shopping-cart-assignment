import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomButtonModule } from 'src/app/shared/custom-button/custom-button.module';

const route = [
  {path: '', component: LoginComponent }
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomButtonModule,
    RouterModule.forChild(route)
  ]
})
export class LoginModule { }
