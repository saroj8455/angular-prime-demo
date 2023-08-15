import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { EditorModule } from 'primeng/editor';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { MenubarModule } from 'primeng/menubar';
@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    ButtonModule,
    CalendarModule,
    EditorModule,
    CardModule,
    ToolbarModule,
    MenubarModule
  ]
})
export class PrimeModule { }
