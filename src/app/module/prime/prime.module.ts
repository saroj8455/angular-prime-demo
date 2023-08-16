import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { EditorModule } from 'primeng/editor';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { MenubarModule } from 'primeng/menubar';
import {ChipModule} from "primeng/chip";
import {SkeletonModule} from "primeng/skeleton";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {GalleriaModule} from "primeng/galleria";
import {InputTextModule} from "primeng/inputtext";
@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    ButtonModule,
    CalendarModule,
    EditorModule,
    CardModule,
    ToolbarModule,
    MenubarModule,ChipModule,
    SkeletonModule,
    ProgressSpinnerModule,
    GalleriaModule,
    InputTextModule
  ]
})
export class PrimeModule { }
