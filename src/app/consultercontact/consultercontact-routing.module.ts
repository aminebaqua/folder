import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultercontactPage } from './consultercontact.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultercontactPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultercontactPageRoutingModule {}
