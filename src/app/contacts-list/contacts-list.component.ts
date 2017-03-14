import { Component, OnInit } from '@angular/core';
import { ContactsService } from './../contacts.service'

import { Contact } from './../models/contact';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/filter'

@Component({
  selector: 'trm-contacts-list',
  template: `
<md-toolbar>
  <md-input-container dividerColor="accent" class="trm-search-container">
    <input mdInput type="text"  (input)="terms.next($event.target.value)" >
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

  private terms = new Subject<string>();

  constructor(private contactsService: ContactsService) {
    //contactsService.getContacts().subscribe(contacts => this.contacts = contacts);
  }

  ngOnInit() {
    //this.contacts = this.contactsService.getContacts();
    //this.terms$.debounceTime(400).distinctUntilChanged().subscribe(term => this.search(term));
    this.contacts =  this.terms
           .debounceTime(400)      //Observable<string>
           .distinctUntilChanged() //Observable<string>
           //.filter (term =>  )
           .switchMap(term => this.contactsService.search(term)) // Observable <Array<Contact>>
           //.merge( this.contactsService.getContacts());
           //.merge( this.contactsService.getContacts().delay(5000)  );  
           .merge( this.contactsService.getContacts().delay(5000).takeUntil(this.terms));                      
  }

  //search(term: string) {
  //  this.contacts = this.contactsService.search(term);
  //}

  trackByContactId(index, contact) {
    return contact.id;
  }

}
