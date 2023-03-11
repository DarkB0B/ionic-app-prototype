import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, Party } from '../services/data.service';

@Component({
  selector: 'app-view-party',
  templateUrl: './view-party.page.html',
  styleUrls: ['./view-party.page.scss'],
})
export class ViewPartyPage implements OnInit {

  public party!: Party;

  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.party = this.data.getPartyById(parseInt(id));
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }

}
