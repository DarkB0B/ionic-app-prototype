import { Injectable } from '@angular/core';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
  contacts: Contacts;

  constructor(contacts: Contacts) {
    this.contacts = contacts
   }
   pickContact() {
    this.contacts.pickContact().then((contact) => {
      console.log(contact);
    });

}
}
