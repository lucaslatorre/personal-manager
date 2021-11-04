// src/app/shared/shared.module.ts
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule],
  exports: [FormsModule],
})
export class SharedModule {}
