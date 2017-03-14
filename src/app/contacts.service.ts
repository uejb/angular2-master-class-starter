import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/delay'; 
import { Contact} from './models/contact';


@Injectable()
export class ContactsService {

constructor(private http: Http) {}

private API_ENDPOINT:string = 'http://localhost:4201/api'; 
private API_ENDPOINT_CONTACTS:string =  this.API_ENDPOINT + '/contacts'; 
private API_ENDPOINT_SEARCH:string =  this.API_ENDPOINT + '/search'; 



getContacts() {
 return this.http.get(this.API_ENDPOINT_CONTACTS)
      .map((res) => { return res.json(); })
      .map((data) => { return data.items; });
}

getContact(id: string) {
   return  this.http.get(this.API_ENDPOINT_CONTACTS + '/' + id )
      .map((res) => { return res.json(); })
      .map((data) => { return data.item; })
      .delay(1000);
}

updateContact(contact: Contact)
{
  return this.http.put(this.API_ENDPOINT_CONTACTS + '/' + contact.id  , contact);
}

search(term: string)
{
  return  this.http.get(this.API_ENDPOINT_SEARCH + '?text=' + term )
      .map((res) => { return res.json(); })
      .map((data) => { return data.items; });
}


}
