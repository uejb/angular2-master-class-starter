import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ContactsService } from './../contacts.service';
import { Contact } from './../models/contact';


@Component({
  selector: 'trm-contacts-editor',
  templateUrl: './contacts-editor.component.html',
  styleUrls: ['./contacts-editor.component.css']
})
export class ContactsEditorComponent implements OnInit {

  constructor  (private route: ActivatedRoute, private router: Router  ,private contactsService : ContactsService) { }

  contact: Contact = <Contact>{ address: {}};

  ngOnInit() {
    this.contactsService.getContact( this.route.snapshot.params['id'] )
      .subscribe(contact => this.contact = contact);
  }


cancel(contact:Contact){
  this.goToDetails(contact); 
}
save(contact:Contact){
 this.contactsService.updateContact(contact).subscribe( () => this.goToDetails(contact) );
}

private goToDetails( contact: Contact )
{
 this.router.navigate(['/contact', contact.id ])
}

}
