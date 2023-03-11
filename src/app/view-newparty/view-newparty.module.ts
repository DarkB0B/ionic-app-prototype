import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewNewpartyPageRoutingModule } from './view-newparty-routing.module';

import { ViewNewpartyPage } from './view-newparty.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewNewpartyPageRoutingModule
  ],
  declarations: [ViewNewpartyPage]
})
export class ViewNewpartyPageModule {}
