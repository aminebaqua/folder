import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListecontactsPage } from './listecontacts.page';

const routes: Routes = [
  {
    path: '',
    component: ListecontactsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListecontactsPageRoutingModule {}
