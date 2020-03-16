import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListecontactsPageRoutingModule } from './listecontacts-routing.module';

import { ListecontactsPage } from './listecontacts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListecontactsPageRoutingModule
  ],
  declarations: [ListecontactsPage]
})
export class ListecontactsPageModule {
  
}
