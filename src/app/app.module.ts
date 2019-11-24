import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveApproachComponent } from './reactive-approach/reactive-approach.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, TemplateDrivenComponent, ReactiveApproachComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
