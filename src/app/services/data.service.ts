import { Injectable } from '@angular/core';

export interface Party {
  name: string;
  description: string;
  date: string;
  users?: User[];
  id: number;
}
export interface User {
  name: string;
  surname: string;
  phone: string;
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  public users: User[] = [
    {
      name: 'John',
      surname: 'Doe',
      phone: '123456789'
    },
    {
      name: 'Jane',
      surname: 'Doe',
      phone: '123456798'
    },
  ];

  public parties: Party[] = [
    {
      name: 'Party 1',
      description: 'Party 1 description',
      date: '2023-04-01',
      users: this.users,
      id: 0
    },
    {
      name: 'Party 2',
      description: 'Party 2 description',
      date: '2023-04-02',
      users: this.users,
      id: 1
    },
    {
      name: 'Party 3',
      description: 'Party 3 description',
      date: '2023-05-03',
      users: this.users,
      id: 2
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

  public getPartyUsers(id: number) {
    return this.parties[id].users;
  }

}
