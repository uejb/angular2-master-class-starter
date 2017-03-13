import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'; 


@Injectable()
export class ContactsService {

constructor(private http: Http) {}

private API_ENDPOINT:string = 'http://localhost:4201/api/contacts'; 


getContacts() {

 return this.http.get(this.API_ENDPOINT)
      .map((res) => { return res.json(); })
      .map((data) => { return data.items; });

 }

getContact(id: string) {
   return  this.http.get(this.API_ENDPOINT + '/' + id )
      .map((res) => { return res.json(); })
      .map((data) => { return data.item; });
}


}
