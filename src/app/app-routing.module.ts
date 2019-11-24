import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveApproachComponent } from './reactive-approach/reactive-approach.component';


const routes: Routes = [
  { path: '', redirectTo: '/reactive', pathMatch: 'full'},
  { path: 'td', component: TemplateDrivenComponent },
  { path: 'reactive', component: ReactiveApproachComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule {

}