import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from 'src/app/core/angular-material/angular-material.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, HttpClientModule, AngularMaterialModule],
})
export class CoreModule {}
