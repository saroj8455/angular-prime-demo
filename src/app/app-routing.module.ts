import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {PagenotFoundComponent} from "./components/pagenot-found/pagenot-found.component";
import {AboutComponent} from "./components/about/about.component";
import {DemoworkComponent} from "./components/demowork/demowork.component";

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"demo-work",component:DemoworkComponent},
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"**",component:PagenotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
