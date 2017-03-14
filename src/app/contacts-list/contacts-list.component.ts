import { Component, OnInit } from '@angular/core';
import { ContactsService } from './../contacts.service'

import { Contact} from './../models/contact';

import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'trm-contacts-list',
  template: `<md-nav-list>
      <a md-list-item [routerLink]="['/contact', contact.id]"
         *ngFor="let contact of contacts | async">
        <img md-list-avatar [src]="contact.image">
        <h3 md-list>{{contact.name}}</h3>
      </a>
      </md-nav-list>`,
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {


//contacts: Contact[];
contacts: Observable<Array<Contact>>

constructor (private contactsService: ContactsService ) {
//contactsService.getContacts().subscribe(contacts => this.contacts = contacts);
}



  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
  }

}
