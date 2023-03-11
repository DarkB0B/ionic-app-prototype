import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'party/:id',
    loadChildren: () => import('./view-party/view-party.module').then( m => m.ViewPartyPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'view-party',
    loadChildren: () => import('./view-party/view-party.module').then( m => m.ViewPartyPageModule)
  },  {
    path: 'view-newparty',
    loadChildren: () => import('./view-newparty/view-newparty.module').then( m => m.ViewNewpartyPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
