import { Component } from '@angular/core';
import { Contact } from './models/contact';
import { ContactsService } from './contacts.service'


@Component({
  selector: 'trm-contacts-app',
    template: `<md-toolbar  color="primary">{{appName}}</md-toolbar>
     <router-outlet></router-outlet>
    `,
  styleUrls: ['./contacts.component.scss']
})
export class ContactsAppComponent {
 
constructor (private contactsService: ContactsService ) {

contactsService.getContacts()
      .subscribe(contacts => this.contacts = contacts);
}
 
appName = 'Contacts Application';

contacts: Contact[];



ngOnInit() {
 // this.contacts = this.contactsService.getContacts();
}


trackByContactId(index, contact)
{
  return contact.id;
}


}
