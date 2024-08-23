import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactformModule } from '../components/contactform/contactform.module';
import { LinkbuttonsModule } from '../components/linkbuttons/linkbuttons.module';

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    ContactformModule,
    LinkbuttonsModule,
  ],
  exports:[ContactComponent]
})
export class ContactModule { }
