import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultercontactPageRoutingModule } from './consultercontact-routing.module';

import { ConsultercontactPage } from './consultercontact.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultercontactPageRoutingModule
  ],
  declarations: [ConsultercontactPage]
})
export class ConsultercontactPageModule {}
