import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewPartyPageRoutingModule } from './view-party-routing.module';

import { ViewPartyPage } from './view-party.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewPartyPageRoutingModule
  ],
  declarations: [ViewPartyPage]
})
export class ViewPartyPageModule {}
