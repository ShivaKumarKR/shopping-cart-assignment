import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomButtonModule } from 'src/app/shared/custom-button/custom-button.module';
import { HomeComponent } from './home.component';

const routes = [{ path: '', component: HomeComponent }]

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    NgbModule,
    CustomButtonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
