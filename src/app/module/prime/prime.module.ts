import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { EditorModule } from 'primeng/editor';
import { CardModule } from 'primeng/card';


@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    ButtonModule,
    CalendarModule,
    EditorModule,
    CardModule
  ]
})
export class PrimeModule { }
