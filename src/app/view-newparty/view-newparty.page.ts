import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-view-newparty',
  templateUrl: './view-newparty.page.html',
  styleUrls: ['./view-newparty.page.scss'],
})
export class ViewNewpartyPage {
  name:string = 'asd12312'




  constructor() {}


  Save() {
    console.log(name);
  }
}
