import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutercontactPageRoutingModule } from './ajoutercontact-routing.module';

import { AjoutercontactPage } from './ajoutercontact.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutercontactPageRoutingModule
  ],
  declarations: [AjoutercontactPage]
})
export class AjoutercontactPageModule {}
