import { Component } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { ViewNewpartyPage } from '../view-newparty/view-newparty.page';
import { DataService, Party } from '../services/data.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  
  constructor(private data: DataService, public navCtrl: NavController) { }
  
   
  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getParties(): Party[] {
    return this.data.getParties();
  }

  goNewPartyPage(){
    this.navCtrl.navigateForward('/view-newparty');
  }

}
