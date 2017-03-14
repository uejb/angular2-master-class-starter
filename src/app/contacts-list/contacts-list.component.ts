import { Component, OnInit } from '@angular/core';
import { ContactsService } from './../contacts.service'

import { Contact} from './../models/contact';

import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'trm-contacts-list',
  template: `
  <md-toolbar>
  <md-input-container dividerColor="accent" class="trm-search-container">
    <input mdInput type="text"  (input)="search($event.target.value)" >
  </md-input-container>
  <md-icon color="accent">search</md-icon>
</md-toolbar>
  
  <md-nav-list>
      <a md-list-item [routerLink]="['/contact', contact.id]"
         *ngFor="let contact of contacts | async; trackBy:trackByContactId">
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

search(term:string ) {
  this.contacts = this.contactsService.search(term);
}



trackByContactId(index,contact)
{
  return contact.id;
}

}
