import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutercontactPage } from './ajoutercontact.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutercontactPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutercontactPageRoutingModule {}
