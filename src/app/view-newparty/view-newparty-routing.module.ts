import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewNewpartyPage } from './view-newparty.page';

const routes: Routes = [
  {
    path: '',
    component: ViewNewpartyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewNewpartyPageRoutingModule {}
