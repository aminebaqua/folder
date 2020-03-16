import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    //redirectTo: 'folder/Inbox',
    redirectTo: 'folder',
    pathMatch: 'full'
  },
  {
    //path: 'folder/:id',
    path: 'folder',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'listecontacts',
    loadChildren: () => import('./listecontacts/listecontacts.module').then( m => m.ListecontactsPageModule)
  },
  {
    path: 'ajoutercontact',
    loadChildren: () => import('./ajoutercontact/ajoutercontact.module').then( m => m.AjoutercontactPageModule)
  },
  {
    path: 'consultercontact',
    loadChildren: () => import('./consultercontact/consultercontact.module').then( m => m.ConsultercontactPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
