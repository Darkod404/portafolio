import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactformComponent } from './contactform.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ContactformComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[ContactformComponent]
})
export class ContactformModule { }
