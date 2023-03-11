import { Injectable } from '@angular/core';

export interface Party {
  Name: string;
  Description: string;
  date: string;
  Users: User[];
  id: number;
}
export interface User {
  Name: string;
  Surname: string;
  Phone: string;
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  public users: User[] = [
    {
      Name: 'John',
      Surname: 'Doe',
      Phone: '123456789'
    },
    {
      Name: 'Jane',
      Surname: 'Doe',
      Phone: '123456798'
    },
  ];

  public parties: Party[] = [
    {
      Name: 'Party 1',
      Description: 'Party 1 description',
      date: '2023-04-01',
      Users: this.users,
      id: 1
    },
    {
      Name: 'Party 2',
      Description: 'Party 2 description',
      date: '2023-04-02',
      Users: this.users,
      id: 2
    },
    {
      Name: 'Party 3',
      Description: 'Party 3 description',
      date: '2023-05-03',
      Users: this.users,
      id: 3
    },
  ];

  constructor() { }

  public getParties(): Party[] {
    return this.parties;
  }

  public getPartyById(id: number): Party {
    return this.parties[id];
  }

  public addParty(party: Party): void {
    this.parties.push(party);
  }

  public updateParty(party: Party): void {
    this.parties[party.id] = party;
  }

  public deleteParty(id: number): void {
    this.parties.splice(id, 1);
  }

}
