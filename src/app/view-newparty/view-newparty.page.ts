import { Component, OnInit } from '@angular/core';
import { DataService, Party } from '../services/data.service';

@Component({
  selector: 'app-view-newparty',
  templateUrl: './view-newparty.page.html',
  styleUrls: ['./view-newparty.page.scss'],
})
export class ViewNewpartyPage {
  nameValue: string = '';
  descriptionValue: string = '';
  dateValue = '';
  data: DataService;

  constructor(data: DataService) {
    this.data = data;
  }

  Save() {
    let ids = this.data.parties.length;

    this.data.addParty({
      name: this.nameValue,
      description: this.descriptionValue,
      date: this.dateValue.split('T')[0],
      users: [this.data.users[0], this.data.users[1]],
      id: ids,
    });
    console.log(this.data.parties[3]);
  }
}
